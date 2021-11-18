import product from '../../../models/product.model/product.model.js';

export const updateProductByID = async (req,res) => {
    const product_UPD = await product.findByIdAndUpdate(req.params.userID, req.body,{new: true});
    
    res.status(200).json(product_UPD);
    
}