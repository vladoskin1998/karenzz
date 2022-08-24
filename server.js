import express from 'express';
import cors from 'cors';
import router from './router.js';
import 'dotenv/config';




const app = express();

app.use(cors())
app.use(express.json());
app.use('api', router)



// const swaggerUi = require('swagger-ui-express'),
//   swaggerDocument = require('./swagger.json');


// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, async () => {
  try {
    
    console.log(`Server listening on port ${process.env.PORT}!`);
  } catch (error) {
    
  }
  
});
