import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';



// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);


app.get("/", (req, res) => {
    res.send("API is Working")
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

