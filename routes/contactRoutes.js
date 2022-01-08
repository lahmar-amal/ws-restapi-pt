const express = require("express");
const router = express.Router();
const {
    addContact,
    getAllContacts,
    getOneContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactControllers");

router.post("/add", addContact);
router.get("/allcontacts", getAllContacts);
router.get("/oneContact/:id", getOneContact);
router.put("/editContact/:id", updateContact);
router.delete("/removeContact/:id", deleteContact);

module.exports = router;
