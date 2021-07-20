const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = 5000;
const authRoute = require("./routes/authentications");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Conected to MongoBD..."))
  .catch((err: any) => console.log(err));

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, "images");
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, "imgExample.jpg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req: any, res: any) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
