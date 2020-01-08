const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(port, () => {
   console.log(`port is running on port ${port}`);
});
