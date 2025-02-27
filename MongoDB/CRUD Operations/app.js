const express=require('express');
const app=express();
const userModel=require('./usermodel'); // ab hmne model import krdiya hai so we can use CRUD here

app.get('/', (req, res) => {
    res.send("Sab chl rha hai");
})

// CRUD operations
// CREATE

app.get('/create', async (req, res) => {
    let createdUser=await userModel.create({
        name : "vishal",
        email : "vishal@gmail.com",
        username : "vishallpanwar"
    })
    res.send(createdUser);
})



//UPDATE

app.get('/update', async (req, res) => {
    let updatedUser=await userModel.findOneAndUpdate({username : "vishallpanwar"}, {name : "vishalllll"}, {new : true});
    res.send(updatedUser);
})



// READ
app.get("/read", async (req, res) => {
     let users=await userModel.find();
     res.send(users);
})



// DELETE
app.get('/delete', async (req, res) => {
    let deletedUser=await userModel.findOneAndDelete({name : "vishalllll"});
    res.send(deletedUser);
})

app.listen(3000);