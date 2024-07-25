const express = require("express");
const mongoose = require("mongoose");
const TestRout = require("../backend/routes/test.js");
const cors = require("cors")
require("dotenv").config();

// express app
const app = express();

app.use(cors());

// routes
app.use("/test", TestRout);



// database connection
mongoose.connect(process.env.DBConnection).then(() => {
    console.log("DB connected...")

    // listening server
    app.listen(process.env.PORT, () => {
        console.log(`Server started on port: ${process.env.PORT}...`);
    });
}).catch((err) => console.log(err));