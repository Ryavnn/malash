import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../App.css';

function Products() {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Category:", category);
    fetchDataFromServer(category);
  }, [category]);

  const fetchDataFromServer = async (category) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/products?category=${category}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      setCategoryData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      alert("Error fetching data");
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>{category}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        categoryData && categoryData.map((item) => (
          <div className="card-items" key={item.id}>
            <img src={item.image} alt="" />
            <div className="item-content">
              <p className="product-name">{item.productName}</p>
              <div className="description">{item.description}</div>
              <span>{item.price}</span>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;
