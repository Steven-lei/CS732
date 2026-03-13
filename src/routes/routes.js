import express from "express";
import moment from "moment";

const router = express.Router();

import api from "./api/index.js";
router.use("/api", api);
router.get("/", function (req, res) {
  var date = moment().format("YYYY-MM-DD, h:mm:ss a");
  res.json({
    status: "success",
    message: "CICD has completed-V3",
    timestamp: date,
    api_usage: {
      base_url: "/api",
      endpoints: [
        { path: "/api/dishes", method: "GET", description: "get all dishes" },
        {
          path: "/api/dishes/:id",
          method: "GET",
          description: "get details for one dish",
        },
      ],
    },
  });
});
export default router;
