const express = require("express");
const path = require("path");
const router = require("./Router/route");
const hbs = require("hbs");

require("dotenv").config({
  path: path.join(__dirname, "/config.env"),
});

const app = express();
const viewPath = path.join(__dirname, "/template/views");
const partialPath = path.join(__dirname, "/template/partials/");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);
app.use("/api", router);

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.listen(process.env.PORT, () => {
  console.log(`App Listening on Port ${process.env.PORT}`);
});
