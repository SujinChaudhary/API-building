import productServices from "../services/product.services.js";

const createProduct = async (req,res)=>{
    const createdProduct= await productServices.createProduct();
    res.json (createdProduct);

};

export default {createProduct};

