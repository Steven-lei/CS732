import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import routes from "./routes/routes.js";
import { whitelist } from "../configs/whitelist.js";
import { initFireBase } from "../configs/firebase-config.js";

console.log("allow cross site from:", whitelist);

dotenv.config();

initFireBase();

const PORT = process.env.PORT ?? 3000;
var app = express();
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, //allowing cookies
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});
