import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: Number, required: true },
  des: { type: String, required: true },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  category: [
    {
      type: String,
      default: "All",
    },
  ],
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
