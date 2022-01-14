const { Schema, model } = require("mongoose");

const Search = new Schema(
  {
    img: String,
    title:String,
    description: String,
    rating: String,
    date: String,
    popularity:String
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("searches", Search);