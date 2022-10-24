const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const cors = require('cors')

const port = process.env.PORT || 5000
const app = express()
env.config();

const postRoute = require('./routes/posts')



mongoose.connect(`mongodb://localhost:27017/tyoutube`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected Succesfully')
})


app.use(express.json())
app.use(cors())


app.use('/api', postRoute)


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})