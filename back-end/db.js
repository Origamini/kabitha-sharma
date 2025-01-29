const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/MySet?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.7";

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(() =>{
        console.log("Connected to MongoDB successfully");
    }).catch((error) =>{
        console.error("Error in connecting to MongoDB: ", error);
    })
}
module.exports = connectToMongo;