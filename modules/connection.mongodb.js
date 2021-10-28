const mongoose = require('mongoose');
const mongodb = require('./../config/database.config').MongoDB;

const connectDB = mongoose.connect(mongodb.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected!');
}).catch((err) => {
    console.log(err);
});


module.exports = { connectDB };