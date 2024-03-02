import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch("http://127.0.0.1:5000/categories");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError("Failed to fetch categories. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="categories">
      {categories.length > 0 ? (
        categories.map((category) => (
          <div className="category-item" key={category.id}>
            <Link to={`/products/${category.name}`} className="category-btn">
              {category.name}
            </Link>
          </div>
        ))
      ) : (
        <div>No categories found.</div>
      )}
    </section>
  );
}

export default Categories;
