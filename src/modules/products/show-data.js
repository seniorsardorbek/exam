import { NotFoundError } from "../../shared/errors/index.js";
import Products from "./Products.js";


export const showData = async (req) => {
    const { id  : _id} = req.params;
  const product = await  Products.findOne({_id}).populate('categoryId')
  if(!product) throw new NotFoundError("Product not found")
    return product
};
