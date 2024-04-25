import mongoose from "mongoose";

async function connectMongo() {
  try {
    await mongoose.connect("mongodb://localhost/widget");
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

connectMongo();

const widgetSchema = mongoose.Schema({
  description: String,
  name: String,
  price: Number,
  size: String,
  stock: Number,
  stores: Array,
});

const Widget = mongoose.model("widget", widgetSchema);

export { Widget };
