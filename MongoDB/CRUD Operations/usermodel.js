const mongoose=require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/pongopractice`);

// Ek schema bnega jisme user data format present hai
const userSchema= mongoose.Schema({
    name : String,
    username : String,
    email : String
})

// Jo module me data aya h usme CRUD perform krne ke liye export bhi to krna pdega
module.exports=mongoose.model("user", userSchema);