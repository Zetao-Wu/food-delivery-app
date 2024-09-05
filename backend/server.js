import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';



// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

app.get("/", (req, res) => {
    res.send("API is Working")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

