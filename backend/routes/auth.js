const express = require("express");
const router = express.Router();
const {checkAuth} = require("../middleware/middleware");

router.post("/verify", checkAuth, (req, res) => {
    res.json({
        message: "Token validated successfully!"
    })
});

module.exports = router;