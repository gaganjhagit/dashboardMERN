const userModel = require('../models/userModel');

const registration=async(req,res)=>{
    console.log(req.body);
    const {name,email,password,mobile}=req.body;
    const user =await userModel.create({
        name,
        email,
        password,
        mobile
    });
    res.send(user);
} 


const userCheck=async(req,res)=>{
   const {email, password}=req.body;
   const user = await userModel.findOne({email:email});

   if(user.email === email && user.password === password){
    res.send({Data:user,msg:"login successfull"})
   }
   else if(user.password!== password){
res.status(401).send({msg:"invalid email or password"});
   }
   console.log(user)
  
}


module.exports={
    registration,
    userCheck
}
