import express from 'express';
import cors from 'cors';
import router from './router.js';
import mongoose from 'mongoose';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import { PORT, LINK_MONGO } from './config/config.js';
import ErrorsMiddleware from './middleware/errors.middleware.js';

const app = express();
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json', 'utf-8'));

app.use(cors())
app.use(express.json());
app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(ErrorsMiddleware)

const server = async () => {
  const db = await mongoose.connect(LINK_MONGO, { useUnifiedTopology: true, useNewUrlParser: true });
  try {
    app.listen(PORT, async () => { console.log(`Server listening on port ${PORT}!`); });
  } catch (error) {
    db.disconnect();
    console.log(error);
  }
}

server()