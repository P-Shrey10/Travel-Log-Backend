const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      max: 20,
      min: 3,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      min: 8,
      unique: true,
    },
    password: {
      type: String,
      required,
      min: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
