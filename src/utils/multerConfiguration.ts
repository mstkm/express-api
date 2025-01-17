import moment from 'moment';
import multer from 'multer';
import path from 'path';

type TOptionsMulterConfigurations = {
    allowedTypes: RegExp;
    fileSize: number;
    destination: string;
    errorString: string;
}

const multerConfiguration = ({
    allowedTypes,
    fileSize,
    destination,
    errorString
}: TOptionsMulterConfigurations) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destination);
        },
        filename: (req, file, cb) => {
            const timestamps = moment().valueOf();
            const name = `${timestamps}-${file.originalname}`
            cb(null, name);
        },
    });
    
    const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
        const fileTypes = allowedTypes;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

        if (extName) {
            cb(null, true);
        } else {   
            const error = new Error(errorString) as Error & { status: number };
            error.status = 400;
            cb(error);
        }
    };
    
    return multer({
        storage,
        fileFilter,
        limits: { fileSize },
    });
};

export const imageUploader = multerConfiguration({
    allowedTypes: /jpeg|jpg|png|gif/,
    fileSize: 1024 * 1024 * 2,
    destination: "src/uploads",
    errorString: "Error: Only images are allowed",
});

export const documentUploader = multerConfiguration({
    allowedTypes: /pdf|doc|docx|xls|xlsx/,
    fileSize: 1024 * 1024 * 5,
    destination: "src/uploads",
    errorString: "Error: Only documents are allowed",
});

export const fileUploader = multerConfiguration({
    allowedTypes: /jpeg|jpg|png|gif|pdf|doc|docx|xls|xlsx/,
    fileSize: 1024 * 1024 * 5,
    destination: "src/uploads",
    errorString: "Error: Only images and documents are allowed",
});

export const excelUploader = multerConfiguration({
    allowedTypes: /xls|xlsx/,
    fileSize: 1024 * 1024 * 5,
    destination: "src/uploads/import-product",
    errorString: "Error: Only spreadsheets are allowed",
});
