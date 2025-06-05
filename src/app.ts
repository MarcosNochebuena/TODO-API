import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import sequelize from './config/database';
import tasksRoutes from './routes/tasks.routes';

// Conexión a la base de datos (ya se ejecuta en el import)
sequelize.authenticate();
sequelize.sync({alter: process.env.NODE_ENV !== 'production'});
const app: Application = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", tasksRoutes);

// init server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
