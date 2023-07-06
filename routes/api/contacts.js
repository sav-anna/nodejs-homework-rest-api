const express = require("express");
const ctrl = require("../../controllers/controllers");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", ctrl.updateContact);

module.exports = router;
