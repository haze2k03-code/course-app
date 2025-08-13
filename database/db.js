const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Haze2k03:92fPfNf9ciAs8nev@cluster0.dwb4p1i.mongodb.net/coursera-app")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// User Schema
const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

// Admin Schema
const adminSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

// Course Schema
const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    creatorId: { type: ObjectId, ref: "admin", required: true }
});

// Purchase Schema
const purchaseSchema = new Schema({
    userId: { type: ObjectId, ref: "user", required: true },
    courseId: { type: ObjectId, ref: "course", required: true }
});

// Models
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = { userModel, adminModel, courseModel, purchaseModel };
