import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import routes from "./routes/routes.js";

dotenv.config();
const PORT = process.env.PORT ?? 3000;
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});
