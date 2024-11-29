import jwt from 'jsonwebtoken'
//admin authentication middleware

const authAdmin = async(req,res,next)=>{
    try{

        const {atoken} = req.headers;
        // console.log(atoken);
        
        if(!atoken){
            return res.json({success:false,message:"Not authorized Login Again"})
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)
        if(token_decode!==process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD ){
            return res.json({success:false,message:"Not authorized Login Again"})
        }

        next();

    }catch(err){
        console.log(err);
        res.json({success:false,message:err.message});
    }
}

export default authAdmin;