const mongoose= require('mongoose');
//const schema = mongoose.Schema;
const { Schema }= mongoose;

const userSchema= new Schema( {
    googleID: String
    
});

mongoose.model('users',userSchema);
