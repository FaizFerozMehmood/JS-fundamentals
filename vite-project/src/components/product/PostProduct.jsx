import axios from "axios";
import React, { useEffect, useState } from "react";

 function PostProduct() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImg] = useState(null);
  const handleSubmit = async() => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("des", des);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:2000/product/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response, "res");
    } catch (error) {
      console.log("error===>", error);
    }
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          onChange={(e) => setDes(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
        />
        <input onChange={(e) => setImg(e.target.files[0])} type="file" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default PostProduct;
