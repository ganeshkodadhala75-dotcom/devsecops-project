const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello DevSecOps AUTO DEPLOY SUCCESS 🔥🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});