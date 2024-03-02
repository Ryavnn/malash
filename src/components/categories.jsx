import { Link } from "react-router-dom";
import '../App.css';

function Categories() {
  return (
    <section className="categories">
      <div className="category-item">
        <Link to="/products/women" className="category-btn">
          Women
        </Link>
      </div>
      <div className="category-item">
        <Link to="/products/men" className="category-btn">
          Men
        </Link>
      </div>
      <div className="category-item">
        <Link to="/products/accessories" className="category-btn">
          Accessories
        </Link>
      </div>
      <div className="category-item">
        <Link to="/products/footwear" className="category-btn">
          Footwear
        </Link>
      </div>
    </section>
  );
}

export default Categories;
