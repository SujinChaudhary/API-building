import Product from "../models/Product.js";

const createProduct = async () => {
  return await Product.create({
    name: "Color RTX 5070 OC",
    brand: "Color",
    description: "Description will be from ai",
    stock: 100,
    price: 200000,
  });
};

export default { createProduct };
