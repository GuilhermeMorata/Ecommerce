import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";


export default function useFileInterceptor(useInterceptor: boolean = true) {
    if (useInterceptor) {
      return FileInterceptor('image', {
        storage: diskStorage({
          destination: './img',
          filename: (req, file, cb) => {
            const randomName = Array(32)
              .fill(null)
              .map(() => Math.round(Math.random() * 16).toString(16))
              .join('');
            return cb(null, `${randomName}${extname(file.originalname)}`);
          },
        }),
      });
    } else {
      return (req, res, next) => next();
    }
  }