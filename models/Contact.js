const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// mongoose.Schema , mongoose.model

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    age: { type: Number, required: true },
    adresse: String,
});

module.exports = Contact = model("Contact", contactSchema);
