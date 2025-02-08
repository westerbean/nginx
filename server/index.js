const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.send("I am the chosen one")
})

app.listen(7777, () => {
    console.log("Listening on PORT 7777")
})