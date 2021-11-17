import user from '../../../models/user.model/user.model.js';

export const getUser = async (req,res) => {
    const users = await user.find();
    res.json(users);
    
}