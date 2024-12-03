import express from 'express';
import cors from 'cors'; // Import the CORS middleware
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware to handle CORS
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

// Define your routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Start the server
app.listen(8800, () => {
    console.log('Server running on port 8800');
});
