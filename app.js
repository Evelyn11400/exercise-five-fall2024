const express = require("express");
const firebase = require("firebase/app");
const app = express();
const port = 3000;

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "exercise-five-fall2024.firebaseapp.com",
  projectId: "exercise-five-fall2024",
  storageBucket: "exercise-five-fall2024.firebasestorage.app",
  messagingSenderId: "323495661427",
  appId: "1:323495661427:web:9f243ce1f7b5cc4f54ff06",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const createPostRoute = require("./routes/createpost");
const singlePostRoute = require("./routes/singlePost");

app.use(express.static("pubilc"));
app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
