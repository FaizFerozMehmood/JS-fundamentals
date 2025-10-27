import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const { title, des, price, image } = req.body;
    if (!title || !des || !price || !image) {
      return res.status(400).json({
        messaage: "all fields are required!",
      });
    }
    const product = new Product({
      title,
      des,
      price,
      image,
    });
    await product.save();

    return res.status(200).json({
      messaage: "product added!",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      messaage: "server errro",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("retrieveData", products);
    if (products.length === 0) {
      return res.status(404).json({
        messaage: "no data in db",
      });
    }
    res.status(200).json({
      messaage: "product fetched successfully!",
      data: products,
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      messaage: "server error",
      error: error.messaage,
    });
  }
};
