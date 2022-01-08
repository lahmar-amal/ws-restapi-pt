const contact = require("../models/Contact");

// add contact
exports.addContact = async (req, res) => {
    try {
        const findContact = await contact.findOne({ email: req.body.email });
        if (findContact) {
            return res
                .status(400)
                .send({ message: "email already used", findContact });
        }
        const newContact = new contact(req.body);
        await newContact.save();
        res.status(200).send({
            message: "contact added successfully",
            newContact,
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
// get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const allContacts = await contact.find();
        res.status(200).send({ message: "all contacts", allContacts });
    } catch (err) {
        res.status(500).send(err);
    }
};
// get one contact by id
exports.getOneContact = async (req, res) => {
    try {
        const oneContact = await contact.findById(req.params.id);
        res.status(200).send({ message: "contact found : ", oneContact });
    } catch (err) {
        res.status(500).send(err);
    }
};
// edit one contact by id
exports.updateContact = async (req, res) => {
    try {
        const editedContact = await contact.updateOne(
            { _id: req.params.id },
            { $set: { ...req.body } }
        );
        res.status(200).send({
            message: "contact is edited succ",
            editedContact,
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
//delete one contact by id
exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await contact.deleteOne({ _id: req.params.id });
        res.status(200).send({ message: "contact deleted successfully" });
    } catch (err) {
        res.status(500).send(err);
    }
};
