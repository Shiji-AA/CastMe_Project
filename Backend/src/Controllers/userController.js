import User from "../Model/userModel.js";
import generateToken from "../../Utils/generateToken.js";
import jwt from 'jsonwebtoken';

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
      password,
    });
    if (user) {
      res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        message: "User registered successfully",
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
      const token = generateToken(user.id);
      return res.json({
        userData,
        token,
        message: "Success",
      });
    } else {
      return res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred. Please try again later." });
  }
};


//googleREGISTER

const googleRegister = async (req, res) => {
  try {

    const token = req.body.credential;    
    const decodedData = jwt.decode(token);  
    //console.log("Decoded data: ", decodedData); 
    const { name, email, jti } = decodedData;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const newUser = new User({
      name: name,
      email: email, 
      password: jti,
    });

    await newUser.save();
    res.status(200).json({ message: "User saved successfully" });
  } catch (error) { 
    return res.status(500).json({error: "An error occurred. Please try again later." })
  }
};


// googleLogin
const googleLogin = async (req, res) => {
  try {
    const decodedData = jwt.decode(req.body.credential);
    if (!decodedData) {
      return res.status(400).json({ error: "Invalid credentials" });
    }    
    const { name, email,jti } = decodedData;
    const user = await User.findOne({email});
    if (user) {
      const { token } = generateToken(user._id);  
      await user.save();

      const userData = {
        name: user.name,
        email: user.email,
        id: user._id     
      };

      return res.json({
        userData,
        token,     
        message: "Success",
      });
    } else {
      return res.status(401).json({ error: "Invalid Email and Password" });
    }
  } catch (error) {
    return res.status(500).json({ error: "An error occurred. Please try again later." });
  }
};


const getUserProfile = async (req, res) => {
  try {
    const user = req.user;  
    const userData = await User.findOne({ _id: user._id });  
    if (!userData) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ userData });
   } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred. Please try again later." });
  }
};

const facebookRegister=async(req,res)=>{
  console.log("nbcndbc")
  try {

    const { accessToken } = req.body; 
    console.log(accessToken)
    const decodedData = jwt.decode(accessToken);  
    //console.log("Decoded data: ", decodedData); 
    const { name, email, jti } = decodedData;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const newUser = new User({
      name: name,
      email: email, 
      password: jti,
    });

    await newUser.save();
    res.status(200).json({ message: "User saved successfully" });
  } catch (error) { 
    return res.status(500).json({error: "An error occurred. Please try again later." })
  }
}



export { registerUser, loginUser, getUserProfile ,googleRegister,googleLogin,facebookRegister};
