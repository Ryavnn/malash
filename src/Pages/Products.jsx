import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../App.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Products() {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Category:", category);
    fetchDataFromServer(category);
  }, [category]);

  const fetchDataFromServer = async (categoryName) => {
    const token = localStorage.getItem('access_token');
    try {
      let url = `http://127.0.0.1:5000/api/products`;
      if (categoryName) {
        url += `?category=${categoryName}`;
      }
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

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
            <Card key={item.id} data={item} /> 
          ))
        )}
      </section>
    </div>
  );
}

export default Products;
