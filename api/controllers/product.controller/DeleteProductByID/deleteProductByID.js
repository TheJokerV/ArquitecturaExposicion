import product from '../../../models/product.model/product.model.js';

export const DeleteProductById = async (req,res) => {
    await product.findByIdAndDelete(req.params.productID);
    res.status(204).json;

}