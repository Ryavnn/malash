import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
        console.log("data fetched")
      }
  
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
        categoryData.map((product) => (
          <div className="card-items" key={product.id}>
            <img src="" alt="" />
            <div className="item-content">
              <p className="product-name">{product.productName}</p>
              <div className="description">{product.description}</div>
              <span>{product.price}</span>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        ))}
    </>
  );
}

export default Products;
