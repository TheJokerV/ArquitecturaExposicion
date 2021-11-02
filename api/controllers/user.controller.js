import user from '../models/user.model.js';

export const createUser = async (req,res) => {

    const {name, lastName, username, addres, age} = req.body;

    const newUser = new user({name, lastName, username, addres, age});

    const userSaved = await newUser.save();

    res.status(201).json(userSaved);

}

export const getUser = async (req,res) => {
    const users = await user.find();
    res.json(users);
    
}

export const getUserByID = async (req,res) => {
const userID = await user.findById(req.params.userById);
res.status(200).json(userID);
    
}

export const updateUserByID = async (req,res) => {
    const userUPD = await user.findByIdAndUpdate(req.params.userById, req.body,{new: true});
    
    res.status(204).json(userUPD);
    
}

// TE QUEDASTE AQUI

export const DeleteUserById = async (req,res) => {

    
}