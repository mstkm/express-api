import moment from 'moment';
import multer from 'multer';
import path from 'path';

type TOptionsMulterConfigurations = {
    allowedTypes: RegExp;
    fileSize: number;
}

const multerConfiguration = (options: TOptionsMulterConfigurations) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'src/uploads');
        },
        filename: (req, file, cb) => {
            const timestamps = moment().valueOf();
            cb(null, `${timestamps}-${file.originalname}`);
        },
    });
    
    const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
        const fileTypes = options.allowedTypes || /jpeg|jpg|png|gif|pdf|doc|docx|xls|xlsx/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);
    
        if (extName && mimeType) {
            cb(null, true);
        } else {
            cb(new Error("Only images, documents, and spreadsheets are allowed"));
        }
    };
    
    return multer({
        storage,
        fileFilter,
        limits: { fileSize: options.fileSize },
    });
};

export const imageUploader = multerConfiguration({
    allowedTypes: /jpeg|jpg|png|gif/,
    fileSize: 1024 * 1024 * 2,
});

export const documentUploader = multerConfiguration({
    allowedTypes: /pdf|doc|docx|xls|xlsx/,
    fileSize: 1024 * 1024 * 5,
});

export const fileUploader = multerConfiguration({
    allowedTypes: /jpeg|jpg|png|gif|pdf|doc|docx|xls|xlsx/,
    fileSize: 1024 * 1024 * 5,
});
