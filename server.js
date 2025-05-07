import express from 'express';
import mongoose from 'mongoose';
import { routes } from './Routes/restaurant.route.js';
import { menuRoutes } from './Routes/restaurantMenu.routes.js';
import { userRoutes } from './Routes/user.routes.js';
import cors from 'cors'

import dotenv from 'dotenv';
dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;

db.on('open', () => {
    console.log("Connection is successful");
});

db.on("error", (error) => { 
    console.log("Connection is not successful:", error);
});

routes(app);
menuRoutes(app);
userRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
