import express from 'express';
import dotenv from 'dotenv';

import databaseConnection from './config/database.js';
import routes from './routes/routes.js';

const app = express();
app.use(express.json());
dotenv.config();

//MongoDB connection
databaseConnection();

//Routing
app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT: ${process.env.PORT}`);
});