import image from "../assets/image.jpg";
function Card() {
  return (
    <>
      <div className="card-items">
        <img src={image} alt="" />
        <div className="item-content">
          <p className="product-name">Dress</p>
          <div className="description">Red womens dress</div>
          <span>ksh 1100</span>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </>
  );
}
export default Card;
