import mongoose from 'mongoose';

//const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try
    {
        await mongoose.connect(db);

        console.log('MongoDB Connected...');
    }
    catch(error) 
    {
        console.error(error.message);
        //Exit process with failure
        process.exit(1);
    }
}
export default connectDB;


//module.exports = connectDB;

/*
const cardSchema = mongoose.Schema({
    name: String,
    profPic: String
});

export default mongoose.model('cards', cardSchema);

[
    {
        "name": "Test Name",
        "profPic": "https://as1.ftcdn.net/v2/jpg/01/17/42/38/500_F_117423860_bApe5ResfiVkO0G0UlUjUVNpAtFUWYYy.jpg"
    },
    {
        "name": "Nest Tame",
        "profPic": "https://thumbs.dreamstime.com/z/happy-university-college-student-thumbs-up-15010463.jpg"
    }
]
*/