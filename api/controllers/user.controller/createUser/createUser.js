import user from '../../../models/user.model/user.model.js';
import jwt from 'jsonwebtoken';
import config from "../../../config/config.js";
import Role from "../../../models/rol.model/rol.model.js";

export const createUser = async (req,res) => {

    const {name, lastName, username, email,password, age, rol} = req.body;

    const newUser_uc = new user ({
        name,
        lastName,
        username,
        email,
        age,
        password: await user.encryptPassword(password)
    })

    if (rol ){

        const foundRoles = await Role.find({name: {$in: rol}})
        newUser_uc.rol = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name: "user"})
        newUser_uc.rol = [role._id];
    }

    const userSaved_uc = await newUser_uc.save();
    const token = jwt.sign({id: userSaved_uc._id}, config.SECRET, {
        expiresIn: 86400 
    });

    res.status(201).json(userSaved_uc);

}