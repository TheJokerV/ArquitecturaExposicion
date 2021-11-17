import user from '../../../models/user.model/user.model.js';

export const updateUserByID = async (req,res) => {
    const user_UPD = await user.findByIdAndUpdate(req.params.userID, req.body,{new: true});
    
    res.status(200).json(user_UPD);
    
}