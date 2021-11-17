import user from "../../../models/user.model/user.model.js";
import jwt from 'jsonwebtoken';
import config from "../../../config/config.js";

export const signin = async (req, res) => {

    const userFound = await user.findOne({email: req.body.email});

    if (!userFound)  return res.status(400).json({message: "user not found"});

    const matchPassword = await user.comparePassword(req.body.password, userFound.password);

    if (!matchPassword) return res.status(401).json({token:null, message: "Invalid Password"});

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400 
    });
    
    res.json({token});
}