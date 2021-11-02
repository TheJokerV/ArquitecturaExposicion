import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import userRoutes from '../api/routes/user.route.js';

const app = express();
app.use(express.json());

app.use('/user',userRoutes);

export default app;

