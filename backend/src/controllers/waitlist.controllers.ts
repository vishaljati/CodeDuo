import {AsyncHandler} from "../utils/index.js";
import Waitlist from "../models/waitlistEmail.models.js";


const saveWaitlistEmail=AsyncHandler(async(req,res)=>{
    
    const  { email }=req.body;

    if (!email) {
        throw new Error("Email is required");
    }
    const emailExists = await Waitlist.findOne({ email });
    if (emailExists) {
        throw new Error("Email already exists");
    }
    const waitlist = await Waitlist.create({ email });
    
    if (!waitlist) {
        throw new Error("Email Save Failed");
    }
    
    return res.status(200).json({waitlist})

})

export default saveWaitlistEmail;