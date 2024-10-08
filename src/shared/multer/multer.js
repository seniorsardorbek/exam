import multer from 'multer'
export const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the directory for storing files
      },
      filename: (req, file, cb) => {
        cb(null, Math.floor(1000 + Math.random() * 9000)
        + '-' + file.originalname); // Name the file with a timestamp
      },
    }),
  });