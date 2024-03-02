import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="categories">
      <div className="category-item">
        <Link to="/women" className="category-btn">
          Women
        </Link>
      </div>
      <div className="category-item">
        <Link to="/men" className="category-btn">
          Men
        </Link>
      </div>
      <div className="category-item">
        <Link to="/accessories" className="category-btn">
          Accessories
        </Link>
      </div>
      <div className="category-item">
        <Link to="/footwear" className="category-btn">
          Footwear
        </Link>
      </div>
    </section>
  );
}

export default Categories;
