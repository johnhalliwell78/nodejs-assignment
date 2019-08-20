const multipleUploadMiddleware = require('../middleware/multipleUploadMiddleware');

let debug = console.log.bind(console);

let multipleUpload = async (req, res) => {
    try {
        // Thực hiện upload
        await multipleUploadMiddleware(req, res);

        //Nếu upload thành công và không có lỗi thì tất cả các file của bạn sẽ được lưu trong biến req.files
        debug(req.files);

        // Kiểm tra còn file được gửi lên hay không thì trả thông báo cho client
        if (req.files.length <= 0) {
            return res.send(`You must select at least 1 file or more.`);
        }

        return res.send(`Your files has been uploaded.`);
    } catch (error) {
        debug(error);
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
            return res.send(`Exceeds the number of files allowed to upload.`);
        }
        return res.send(`Error when trying upload many files: ${error}}`);
    }
};

module.exports = {
    multipleUpload: multipleUpload
};