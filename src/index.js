/*
require(`dotenv`).config({ path: `./env` });
               OR
*/
import dotenv from "dotenv";
import connectDB from "./db/index.db.js";

dotenv.config({ path: `./env` });

connectDB()
  .then((result) => {
    app.on("error", () => {
      console.log("ERROR: Couldn't connect to Mongo");
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`👁️‍🗨️ listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed: " + err);
  });































  
/* 
                                OR


import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERROR: Couldn't connect to Mongo");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`APP is listening on ${process.env.PORT}`);
    });
    
  } catch (error) {
    console.error("ERROR: " + error);
    throw error;
  }
})();
*/
