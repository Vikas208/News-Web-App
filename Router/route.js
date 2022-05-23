const express = require("express");
const path = require("path");
const axios = require("axios");

require("dotenv").config({ path: path.join(__dirname, "../config.env") });
const router = express.Router();

router.use(express.static(path.join(__dirname, "../public")));

router.get("/topheadline", async (req, res) => {
  res.status(200);
  if (req.query.country === undefined) {
    req.query.country = "in";
  }
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${req.query.country}&apiKey=${process.env.API_KEY}`
  );

  res.render("News", {
    title: "Top Headline",
    data: response.data,
    isNotSearch: true,
  });
});

router.get("/technology", async (req, res) => {
  res.status(200);
  if (req.query.country === undefined) {
    req.query.country = "in";
  }
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${req.query.country}&category=technology&apiKey=${process.env.API_KEY}`
  );

  res.render("News", {
    title: "Technology",
    data: response.data,
    isNotSearch: true,
  });
});

router.get("/business", async (req, res) => {
  res.status(200);
  if (req.query.country === undefined) {
    req.query.country = "in";
  }
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${req.query.country}&category=business&apiKey=${process.env.API_KEY}`
  );

  res.render("News", {
    title: "Business",
    data: response.data,
    isNotSearch: true,
  });
});

router.get("/entertainment", async (req, res) => {
  res.status(200);
  if (req.query.country === undefined) {
    req.query.country = "in";
  }
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${req.query.country}&category=entertainment&apiKey=${process.env.API_KEY}`
  );

  res.render("News", {
    title: "Entertainment",
    data: response.data,
  });
});

router.get("/sports", async (req, res) => {
  res.status(200);
  if (req.query.country === undefined) {
    req.query.country = "in";
  }
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${req.query.country}&category=sports&apiKey=${process.env.API_KEY}`
  );

  res.render("News", {
    title: "Sports",
    data: response.data,
  });
});

router.get("/science", async (req, res) => {
  res.status(200);
  if (req.query.country === undefined) {
    req.query.country = "in";
  }
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${req.query.country}&category=science&apiKey=${process.env.API_KEY}`
  );

  res.render("News", {
    title: "Science",
    data: response.data,
    isNotSearch: true,
  });
});

router.get("/search", async (req, res) => {
  res.status(200);
  if (req.query.country === undefined) {
    req.query.country = "in";
  }
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${req.query.query}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`
  );

  res.render("News", {
    title: `Result of "${req.query.query}"`,
    data: response.data,
    isNotSearch: false,
  });
});
module.exports = router;
