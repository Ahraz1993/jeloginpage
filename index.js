const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/myloginregisterDB",()=>{
    console.log("DB connected");
});

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    id: String,
    email: String,
    password: String,
    mobno: String
});
const User = new mongoose.model("User", userSchema);

//routes
app.post("/Login", (req, res) => {
    const {  id,  password, mobno } = req.body;
    console.log(password);
    User.findOne({id:id},(err,user)=>{
        if(user){
            if(password==user.password){
                res.send({message:"login suceesful",user:user})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }
        else{
            res.send({message:"user not registered"})
        }
        if(user){
            res.send(user.fname);
        }
        else{
            res.send("Not found");
        }
    })
})
app.post("/Signup", (req, res) => {
    const { fname, lname, id, email, password, mobno } = req.body;
    User.findOne({id:id},(err,user)=>{
        if(user){
            res.send({meassage:"User already registered"})
        }
        else{
            const user = new User({
                fname,
                lname,
                id,
                email,
                password,
                mobno
            })
            user.save(err=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send({message:" User saved "})
                }
            })
        }
    })
    
   

})
app.listen(8080, () => {
    console.log("BE starte at port 8080");
})
