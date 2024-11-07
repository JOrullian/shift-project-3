const mongoose = require('mongoose');


const { Schema } = mongoose;


const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
});


const Skill = mongoose.model('Skill', skillSchema);
 
module.exports = Skill;