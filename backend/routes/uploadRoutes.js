import path from "path";
import express from "express";
import multer from "multer";
import sharp from "sharp";
import fs from "fs";
const router = express.Router();

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Images less than 1MB only!"));
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
  limits: { fileSize: 1000000 },
});

router.post("/", upload.single("image"), async (req, res) => {
  const { filename: image } = req.file;
  await sharp(req.file.path)
    .resize(300, 300)
    .jpeg({ quality: 90 })
    .toFile(path.resolve(req.file.destination, "resized", image));
  fs.unlinkSync(req.file.path);
  res.send("/uploads/resized/" + req.file.filename);
});

export default router;
