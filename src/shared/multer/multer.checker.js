import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function multerChcker(req) {
  req.files.forEach((image) => {
    const imagePath = path.join(__dirname, '../../../', image.path);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath); 
    }
  });
}
