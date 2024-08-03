import User from '../src/Model/userModel.js';
import jwt from 'jsonwebtoken';

export const isLogin = async (req, res, next) => {
    try {
        // Log request headers to debug
        console.log('Request Headers:', req.headers);

        // Extract the Authorization header
        const authorizationHeader = req.headers.authorization;
        console.log('Authorization Header:', authorizationHeader);

        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized - No token found' });
        }

        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No token found' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.user_id);

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized - User not found' });
        }

        req.user = user; // Attach user to the request object
        next();
    } catch (error) {
        console.error('Error in isLogin middleware:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
