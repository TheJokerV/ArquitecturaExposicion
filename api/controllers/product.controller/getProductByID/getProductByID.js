import product from '../../../models/product.model/product.model.js';

export const getProductByID = async (req,res) => {
    const product_ID = await product.findById(req.params.userID);
    res.status(200).json(product_ID);
        
    }