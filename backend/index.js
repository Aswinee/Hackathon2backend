// Importing the Express
const express = require("express");
const app = express();

require("dotenv").config();

const cors = require("cors");

// Importing all the routes
const authRoute = require("./routes/auth.routes");
const tagsRoute = require("./routes/tag.routes");
const jobsRoute = require("./routes/job.routes");
const questionsRoute = require("./routes/question.routes");

const mongo = require("./shared/mongo");

async function loadApp() {
  try {
    // Mongo Connection
    await mongo.connect();

    // Middlewares

    app.use(cors());

    // Purpose => Parse Request Body
    app.use(express.json());

    // Purpose => Logging
    app.use((req, res, next) => {
      console.log(`${req.url} ${req.method} at ${new Date()}`);
      next();
    });

    // Routes
    app.use("/auth", authRoute);
    app.use("/tags", tagsRoute);
    app.use("/jobs", jobsRoute);
    app.use("/questions", questionsRoute);

    // Starting Server
    app.listen(process.env.PORT, () =>
      console.log(`Server listening at port ${process.env.PORT}...`)
    );
  } catch (err) {
    console.error(err);
    process.exit();
  }
}

loadApp();
