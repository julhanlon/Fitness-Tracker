const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// routes
app.use(require("./routes/exercise-routes.js"));
app.use(require("./routes/client-routes.js"));

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

