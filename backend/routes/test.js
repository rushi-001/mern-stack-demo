const { Router } = require("express");
const { test } = require("../controllers/testController");

const TestRout = Router();

TestRout.get("/", test);

module.exports = TestRout;