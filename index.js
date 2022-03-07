const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/homework_foodblog.html"));
  //__dirname : It will resolve to your project folder.
});

app.use("/", router);
app.listen(process.env.port || 4000);

console.log("Running at Port 4000");

module.exports = router;