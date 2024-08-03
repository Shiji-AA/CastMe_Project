import 'dotenv/config'
import jwt from 'jsonwebtoken';

const generateToken=(user_id)=>{ 
const token =jwt.sign({user_id},process.env.JWT_SECRET ,{     
expiresIn: '2d'
})
return {token}
}
export default generateToken;