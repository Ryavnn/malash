import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../App.css';

function Products() {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    fetchDataFromServer(category);
  }, [category]);

  const fetchDataFromServer = async (category) => {
    try {
      const response = await fetch(`http://localhost:3000/product?category=${category}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    console.log("data fetched")
  
      const jsonData = await response.json();
      setCategoryData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      alert("Error fetching data");
    }
  }
  return (
    <>
      <h1>{category}</h1>
      {categoryData &&
        categoryData.map((item) => (
          <div className="card-items" key={item.id}>
            <img src={item.image} alt="" />
            <div className="item-content">
              <p className="product-name">{item.productName}</p>
              <div className="description">{item.description}</div>
              <span>{item.price}</span>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        ))}
    </>
  );
}

export default Products;
