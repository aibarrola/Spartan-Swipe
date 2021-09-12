import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    profPic: String
});

export default mongoose.model('cards', cardSchema);