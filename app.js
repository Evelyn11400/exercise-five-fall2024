const express = require("express");
const app = express();
const port = 3000;

const indexRoute = require("./routes/index");
const createPostRoute = require("./routes/createpost");
const singlePostRoute = require("./routes/singlePost");

app.use("/", indexRoute);
app.use("/", createPostRoute);
app.use("/", singlePostRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
