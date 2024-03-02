import bannerImage from "../assets/banner.jpg"
function Banner(){
    return(
        <div className="banner">
            <div className="banner-text">
                <h2>Find what fits you best</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus similique aliquid officiis perferendis eveniet adipisci provident dolorem</p>
                <button className="banner-btn">Shop now</button>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="" />
            </div>
        </div>
    )
}
export default Banner