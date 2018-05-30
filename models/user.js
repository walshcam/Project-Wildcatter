const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//********** DEFINE OUR MODEL *********

const userSchema = new Schema({
    email: { 
        type: String, 
        unique: true,
        lowercase: true 
    },
    password: String
});

//********** CREATE THE MODEL CLASS **********

const ModelClass = mongoose.model('user', userSchema);



//********** EXPORT THE MODEL **********

module.exports = ModelClass;
