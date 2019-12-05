import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
    } catch (e) {
      console.log(e);
    }
  }

  return handler(req, res);
};

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to Mongo");
});

export default connectDB;
