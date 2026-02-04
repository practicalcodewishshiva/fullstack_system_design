const { default: mongoose } = require("mongoose");

const UserLoginSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User Name is required or mandatory"],
  },
  password: {
    type: String,
    required: [true, "password is mandatory"],
  }
});

module.exports = mongoose.model("login", UserLoginSchema);
