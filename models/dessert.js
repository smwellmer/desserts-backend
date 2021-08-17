// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const dessertSchema = new Schema(
  {
    name: String,
    category: String,
    img: String,
    url: String
  },
  { timestamps: true }
);

// Create our Model Object
const Dessert = model("Dessert", dessertSchema);

// Export our Model Object
module.exports = Dessert;