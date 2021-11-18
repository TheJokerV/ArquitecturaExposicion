import product from '../../../models/product.model/product.model.js';

export const createProduct = async (req,res) => {

    const {name, cost, imgURL} = req.body;

    const newProduct_pc = new product ({
        name,
        cost,
        imgURL
    })

    const productSaved_pc = await newProduct_pc.save();

    res.status(201).json(productSaved_pc);

}