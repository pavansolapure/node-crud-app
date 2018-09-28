import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://nodeuser:nodepwd@opencodez-pzgjy.gcp.mongodb.net/test?retryWrites=true",
    { 
      useNewUrlParser: true
    }
  );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB database")
});

module.exports = db;