import product from '../../../models/product.model/product.model.js';

export const getProduct = async (req,res) => {
    const products = await product.find();
    res.json(products);
    
}