const Posts = require('../models/posts')
const fs = require('fs')

exports.ceatePost = async(req, res) => {


    try {
        const newpost = await new Posts({
            title: req.body.title,
            img: {
                data: fs.readFileSync("uploads/" + req.file.filename),
                contentType: 'image/png'
            }
        })

        const savepost = await newpost.save();
        if (savepost) {
            return res.status(200).json({ message: "Post succesfully created" })
        }

    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.fetchPosts = async(req, res) => {
    try {
        const posts = await Posts.find({});
        if (posts) {
            return res.status(200).json(posts)
        }
    } catch (error) {
        return res.status(200).json(error)

    }
}