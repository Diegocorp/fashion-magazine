const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = 5000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Conected to MONGOBD..."))
  .catch((err: any) => console.log(err));

app.use("/", (req: any, res: any) => {
  console.log("This is the main URL");
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
