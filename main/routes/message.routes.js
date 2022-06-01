const router = require("express").Router();
const MessageApp = require("../service/messageApp")
const messageApp = new MessageApp()

router.get("/hello", (req, res, next) => {

    res.json("hello world");

});

router.post("/message", (req, res, next) => {

    const { destination, body } = req.body

    messageApp
        .getOneMessage({ destination, body })
        .then((response) => res.status(200).json(response.data))
        .catch((err) => res.status(500).json(err))

});

module.exports = router;
