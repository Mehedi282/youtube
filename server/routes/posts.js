const express = require('express')
const router = express.Router();
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })

const { ceatePost, fetchPosts } = require('../controllers/posts')


router.post('/ceatePost', upload.single('postimage'), ceatePost);
router.get('/fetchPosts', fetchPosts);




module.exports = router