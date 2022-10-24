const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },

    img: {
        data: Buffer,
        contentType: String
    }

}, {
    timestamps: true,
})

const Post = mongoose.model('Posts', postSchema);
module.exports = Post;