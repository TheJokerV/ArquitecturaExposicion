import express from "express";

import userRoutes from '../api/routes/user.route/user.route.js';
import authRoutes from '../api/routes/auth.route/auth.route.js';
import productRoutes from '../api/routes/product.route/product.route.js'
import { createRoles } from "../api/libs/initialSetUp.js";

const app = express();
createRoles();
app.use(express.json());

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/products', productRoutes);

export default app;

