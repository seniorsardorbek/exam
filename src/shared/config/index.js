import 'dotenv/config';

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }
};
