import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"The prouduct name is required"],
    minlength: [3,"Product name must be atleast 3 characters "],
    maxlength: [100, "Product name must not exceed 100 characters"],
  },
  brand: {
    type: String,
    maxlength: [50, "The brand name must not exceed 50 characters"]

  },
  description: {
    type: String,
    maxlength: [500, "The Description must not exceed 500 characters"], 
    default: ""
  },
  is_featured: {
    type: Boolean,
    default: false
  },
  stock:{
     type: Number,
    default: 1,
     min: [0,"Must not be less than 0"],
  },
  price: {
    type: Number,
    required: [true,"The Price is required"],
    min: [1,"Must not be less than 1"],

  },
  createdAt:{
    type: Date,
    default: Date.now(),
  },
  imageUrls:{
    type: [String],
    
  }
  
});
export default mongoose.model("Product",productSchema);
