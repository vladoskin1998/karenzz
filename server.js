import express from 'express';
import cors from 'cors';
import router from './router.js';
import mongoose from 'mongoose';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const app = express();
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json', 'utf-8'));

app.use(cors())
app.use(express.json());
app.use('api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = async () => {
  const db = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@transaction.osqhvw2.mongodb.net/?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true });
  try {
    app.listen(process.env.PORT, async () => { console.log(`Server listening on port ${process.env.PORT}!`); });
  } catch (error) {
    db.disconnect();
    console.log(error);
  }
}

server()