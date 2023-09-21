import mongoose from "mongoose";

class Database{
    constructor(){
        this.mongo()
    }
    mongo(){
        mongoose.connect('mongodb://localhost:27018/to-do').then(() => {
            console.log("Connected to MongoDB");
        }).catch((err) => {
            console.error('Error:' + err);
        })
    }
}

export default new Database()