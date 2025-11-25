import Brands from "../Brands";
import CallToAction from "../CallToAction";
import Hero from "../Hero";
import PopularProducts from "../PopularProducts";
import PopularSeg from "../PopularSeg";

const MainPage = ({ onLoad }) => {
  return (
    <>
      <Hero onLoad={onLoad} />
      <Brands />
      <PopularSeg />
      <PopularProducts />
      <CallToAction />
    </>
  );
};

export default MainPage;
