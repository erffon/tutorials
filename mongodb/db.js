const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  // connect to db function
  connectToDb: (callback) => {
    // async function
    MongoClient.connect("mongodb://localhost:27017/bookstore")
      .then((client) => {
        dbConnection = client.db();
        return callback();
      })
      .catch((err) => {
        console.log("error :", err);
        return callback(err);
      });
  },
  // retrieving the db function
  getDb: () => dbConnection,
};
