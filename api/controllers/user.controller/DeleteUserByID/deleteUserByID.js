import user from '../../../models/user.model/user.model.js';

export const DeleteUserById = async (req,res) => {
    await user.findByIdAndDelete(req.params.userID);
    res.status(204).json;

}