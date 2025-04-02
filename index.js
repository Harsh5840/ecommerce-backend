const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth");

app.use("/api/user" , userRouter);
app.use("/api/auth" , authRouter);  
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecommerce")
.then(()=>{
    console.log("db connecion success");
})
.catch((err)=>{
    console.log(err);
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 