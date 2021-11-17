import user from '../../../models/user.model/user.model.js';

export const getUserByID = async (req,res) => {
    const user_ID = await user.findById(req.params.userID);
    res.status(200).json(user_ID);
        
    }