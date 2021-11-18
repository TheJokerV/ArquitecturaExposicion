import user from "../../models/user.model/user.model.js";
import rol from "../../models/rol.model/rol.model.js"

export const isAdmin = async (req,res, next) => {

    const user_ad = await user.findById(req.userId)
    const roles = await rol.find({_id: {$in: user_ad.rol}})

    for (let i = 0; i < roles.length; i++){

        if (roles[i].name === "admin"){
            next();
            return;
        }
    }

    return res.status(403).json({message: "Require admin rol"});
}