import mongoose from 'mongoose';
import config from '../shared/config/index.js';

export default  async function () {
  return mongoose
    // .connect(`${config.db.host}/${config.db.name}`, {
    .connect(`mongodb+srv://${config.db.host}@cluster0.ysxkkxu.mongodb.net/${config.db.name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('DB ga ulandi.');
    })
    .catch((err) => {
      console.log('DB da xatolik: ', err);
    });
}
