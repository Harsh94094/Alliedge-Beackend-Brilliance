const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide first name'],
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name'],
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required: [true, 'Please provide email'],
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please provide phone number'],
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6  // Adjust the minimum length as needed
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    resetPasswordOTP:{
        type: Number,
        default:null

    }
});

// UserSchema.pre("save", async function(next) {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// UserSchema.methods.comparePassword = async function(candidatePassword) {
//     try {
//         const isMatch = await bcrypt.compare(candidatePassword, this.password);
//         return isMatch;
//     } catch (error) {
//         return false;
//     }
// };

module.exports = mongoose.model("User", UserSchema);
