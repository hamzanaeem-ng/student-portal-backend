const express = require("express");
const cors = require("cors");
const mainRH = require("./routes/main");
const app = express();

const options = {
  origin: 'http://localhost:1200'
};
app.use(express.json());
app.use(cors(options));
app.use("/api/v1/main/", mainRH);

const port = 8080;

app.listen(port, () => {
  console.log(`Server is ready to listen on port ${port}`);
});
