import axios from "axios";
import React, { useEffect, useState } from "react";

function GetProducts() {
  const [product, setProduct] = useState([]);
  async function fetchData() {
    const data = await axios.get("http://localhost:2000/product/get");
    console.log("data", data);
  }
  useEffect(() => {
    fetchData()
  }, []);
  return <div>GetProducts</div>;
}

export default GetProducts;
