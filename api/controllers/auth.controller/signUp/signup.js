import user from "../../../models/user.model/user.model.js";
import jwt from 'jsonwebtoken';
import config from "../../../config/config.js";

export const signup = async (req, res) => {

    const {name, lastName, username, email,password, age} = req.body;

    const newUser_ac = new user ({
        name,
        lastName,
        username,
        email,
        age,
        password: await user.encryptPassword(password)
    })

    const userSaved = await newUser_ac.save();

    const token = jwt.sign({id: userSaved._id}, config.SECRET, {
        expiresIn: 86400 
    });

    res.status(200).json({token});

}