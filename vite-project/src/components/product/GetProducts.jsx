import axios from "axios";
import React, { useEffect, useState } from "react";

function GetProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("http://localhost:2000/product/get");
        if (data.status === 200) {
          setProduct(data?.data?.data);
        }
      } catch (error) {
        setError("error fetching product");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log("product", product);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      {product && product.length !== 0
        ? product.map((data) => (
            <div key={data._id}>
              <h3>{data.title}</h3>
              <p>{data.des}</p>
              <p>{data.price}</p>
              <img src={data.image} alt={data.title} width={100} />
            </div>
          ))
        : "no products availabe!"}
    </div>
  );
}

export default GetProducts;
