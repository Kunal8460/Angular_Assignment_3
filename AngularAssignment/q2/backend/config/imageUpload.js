const multer = require("multer")
const path = require("path")
let Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../frontend/src/assets/images"))
    }, filename: function (req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
            cb(null, "../../assets/images/" + Date.now() + file.originalname)
        } else
            cb(new Error(`Invalid file format`))
    }
})

let upload = multer({ storage: Storage })
module.exports = upload