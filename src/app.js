import express from "express";

import userRoutes from '../api/routes/user.route/user.route.js';
import authRoutes from '../api/routes/auth.route/auth.route.js';

const app = express();
app.use(express.json());

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

export default app;

