import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Categories from "../components/categories";
import Advert from "../features/advert";
import useAuthCheck from '../features/useAuthCheck';

function Homepage() {
  useAuthCheck();
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
