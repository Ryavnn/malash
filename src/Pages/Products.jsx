import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "../App.css";
import Navbar from "../components/Navbar";
import image from "../assets/image.jpg"
import { shopContext } from "../features/context";

function Products() {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {addToCart} = useContext(shopContext)

  useEffect(() => {
    console.log("Category:", category);
    fetchDataFromServer(category);
  }, [category]);

  const fetchDataFromServer = async (category) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/products?category=${category}`
      );

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
      <Navbar />
      <h1 className="page-header">{category}</h1>
      <section className="product-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          categoryData &&
          categoryData.map((item) => (
            <div className="card-items" key={item.id}>
              <img src={image} alt="" />
              <div className="item-content">
                <p className="product-name">{item.productName}</p>
                <div className="description">{item.description}</div>
                <span>Ksh {item.price}</span>
                <button className="add-to-cart" onClick={() => addToCart(item.id)}>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Products;
