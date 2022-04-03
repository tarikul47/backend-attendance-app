const { model, Schema } = require('mongoose');
const User = require('./User');
const profileSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    avatar: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
    },
});
const Profile = model('User', profileSchema);
module.exports = Profile;