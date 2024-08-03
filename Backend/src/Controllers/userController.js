import User from "../Model/userModel.js";
import generateToken from "../../Utils/generateToken.js";


const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await User.create({
            name,
            email,
            password
        });
        if (user) {
            res.status(201).json({
                id: user._id,
                name: user.name,
                email: user.email,
                message: "User registered successfully"
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error", error: error.message });
    }
};

const loginUser = async (req, res) => {
  
    try {
        const { email, password } = req.body;        
        const user = await User.findOne({ email });
         
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }    
        if (await user.matchPassword(password)) {
            const userData = {              
                name: user.name,
                email: user.email,
                id: user.id,
            };            
            const token =generateToken(user.id)              
            return res.json({
                userData,
                token,
                message: "Success",
            });
        } else {
            return res.status(400).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json({ error: "An error occurred. Please try again later." });
    }
};

const getUserProfile = async (req, res) => {
    console.log(req,"req")
  
    try {
        console.log("this is profileData")
    //   const user =   (req as any).user   //from middleware   
    //   const userData = await studentModel.findOne({ _id: user._id});    
    //   if (!userData) {
    //     return res.status(404).json({ message: "Student not found" });
    //   }
    //   res.status(200).json({ userData });
    } 
    catch (error) {
      return errorHandler(res,error); 
    }
  };

export{registerUser,loginUser,getUserProfile}