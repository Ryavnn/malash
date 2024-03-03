import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Categories from "../components/categories";
import Advert from "../features/advert";

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Advert />
      <Categories />
    </>
  );
}

export default Homepage;
