import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


import userRoutes from './routes/userRoutes.js'
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users',userRoutes)
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Test route
app.get('/', (req, res) => {
  res.send('Server is up and running 🚀');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
