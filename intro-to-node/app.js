"use strict";
const express = require("express");
const app = express();

// define all endpoints here
// Testing endpoints
app.get("/hello", function (req, res) {
  res.type("text");
  res.send("Hello World!");
});

// Exercise 1: Splendid Circles
app.get("/math/circle/:r", function (req, res) {
  // Get the radius from the URL
  let radius = parseFloat(req.params.r);

  // Logic to check if the radius is a number
  if (isNaN(radius) || radius <= 0) {
    res.status(400).type("text").send("Invalid radius");
    return;
  }

  // Calculate area and circumference
  let area = Math.PI * Math.pow(radius, 2);
  let circumference = 2 * Math.PI * radius;

  // Respond with area and circumference
  res.type("text").send(`Area: ${area}, Circumference: ${circumference}`);
});
// Exercise 2: Hello, you!
// Create an endpoint that returns "Hello, {NAME}"
app.get("/hello/name/:first/:last", function (req, res) {
  // Get the name from the query string
  let first = req.params["first"];
  let last = req.params["last"];

  // Logic to check if first and last are provided
  if (!first && !last) {
    res.status(400).type("text").send("Missing firstname and lastname");
    return;
  }
  if (!first) {
    res.status(400).type("text").send("Missing firstname");
    return;
  }
  if (!last) {
    res.status(400).type("text").send("Missing lastname");
    return;
  }
  // Respond with first and last name
  res.type("text").send(`Hello ${first} ${last}`);
});

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
