import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const connectDB = async () => {
  if (db) {
    return db;
  }
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables"
      );
    }
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    db = client.db("next-auth");

    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    throw error;
  }
};

export default connectDB;
