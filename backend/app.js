const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const predictRoute = require("./routes/predict");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", predictRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
