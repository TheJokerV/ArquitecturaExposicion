import user from '../../../models/user.model/user.model.js';

export const createUser = async (req,res) => {

    const {name, lastName, username, email,password, age} = req.body;

    const newUser_uc = new user ({
        name,
        lastName,
        username,
        email,
        age,
        password: await user.encryptPassword(password)
    })

    const userSaved_uc = await newUser_uc.save();

    res.status(201).json(userSaved_uc);

}