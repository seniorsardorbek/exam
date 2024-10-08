import cors from 'cors';
import express from 'express';
import db from './db/index.js';
import userModule from './modules/users/_api.js';
import categoryModule from './modules/categories/_api.js';
import productModule from './modules/products/_api.js';
import commentModule from './modules/comments/_api.js';
import config from './shared/config/index.js';
import handleError from './shared/errors/handle.js';
import { swaggerUi, specs } from './shared/swagger/swagger.js'; // Use named import
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());
app.use(express.static("uploads"))
app.use(express.json());
app.use(userModule);
app.use(categoryModule);
app.use(productModule);
app.use(commentModule);

app.use(handleError);
// app.use()

db();

app.listen(config.port, () => {
  console.log(`Server is running ${config.port}`);
});
