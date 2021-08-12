const { ObjectId } = require("mongodb");

const mongo = require("../shared/mongo");

const service = {
  getQuestions() {
    return mongo.db.collection("questions").find().toArray();
  },
  updateQuestions(id, data) {
    console.log(data);
    return mongo.db
      .collection("posts")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: data },
        { returnDocument: "after" }
      );
  },
};

module.exports = service;
