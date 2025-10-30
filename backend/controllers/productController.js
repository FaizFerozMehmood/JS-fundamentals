import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  console.log("body=========..>>>", req.body)
  console.log("body=========..>>>", req.file)
  try {
    const { title, des, price } = req.body;
        const image = req.file ? req.file.filename : "";
            const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${image}`;


    if (!title || !des || !price || !image) {
      return res.status(400).json({
        messaage: "all fields are required!",
      });
    }
    const product = new Product({
      title,
      des,
      price:Number(price),
      image:imageUrl
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

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteByID = await Product.findByIdAndDelete(id);
    if (!deleteByID) {
      res.status(404).json({
        messaage: "product not found",
      });
    }
    res.status(201).json({
      messaage: "deleted",
    });
    console.log("deleted");
  } catch (error) {
    console.log("error");
    res.status(500).json({
      messaage: "error deleting product",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, des, price, image } = req.body;
    const updateproductFields = {
      title: title,
      des: des,
      price: price,
      image: image,
    };
    const updated = await Product.findByIdAndUpdate(id, updateproductFields, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
     return res.status(404).json({
        message: " product not found!",
      });
    }
    res.status(200).json({
      messaage: "product updated",
      data: updated,
    });
  } catch (error) {
    console.log("server error");
    res.status(500).json({
      message: "server error",
      error: error.messaage,
    });
  }
};
