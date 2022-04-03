const { model, Schema } = require("mongoose");
const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: function (v) {
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a email!`,
    },
  },
  password: String,
  roles: {
    type: [String],
    required: true,
    default: ["Student"],
  },
  accountStatus: {
    type: String,
    enum: ["Pending", "Active", "Rejected"],
    default: "Pending",
    required: true,
  },
});
const User = model("User", userSchema);
module.exports = User;
