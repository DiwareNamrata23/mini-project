const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes"); // Ensure this file exists
const blogRouter = require('./routes/routes'); // Import your blog routes

const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from your frontend origin
}));
app.use(express.json()); // Parse JSON bodies

// User routes
app.use('/users', userRouter); // Ensure userRouter is properly defined

// Blog routes
app.use("/api", blogRouter); // Use the blog routes under /api endpoint

// Root route
app.get("/", (req, res) => {
    res.send("Market Mavericks Backend");
});

// MongoDB connection logic
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");

        // Start the server on successful MongoDB connection
        const PORT = process.env.PORT || 5001;
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

module.exports = app;
