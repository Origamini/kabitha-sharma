const mongoose = require('mongoose');
const {Schema} = mongoose;

const FeedBackSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('feedbacks',FeedBackSchema);
