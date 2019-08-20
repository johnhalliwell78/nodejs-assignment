const util = require('util');
const path = require('path');
const multer = require('multer');

// Create disk Storage
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(`${__dirname}/../uploadResults`));
        console.log(path.join(`${__dirname}/../uploadResults`));
    },
    filename: (req, file, callback) => {
        let math = ['image/png', 'image/jpeg'];
        if (math.indexOf(file.mimetype) === -1) {
            let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
            return callback(errorMess, null);
        }

        let filename = `${Date.now()}-giangtran-${file.originalname}`;
        callback(null, filename);
    }
});

let uploadMultipleFiles = multer({storage: storage}).array("many-files", 10);

let multipleUploadMiddleware = util.promisify(uploadMultipleFiles);

module.exports = multipleUploadMiddleware;