import AboutCompany from "./about-company";
import MainSlider from "./main-slider";
import News from "./news";
import Services from "./services";

const HomeContainer = () => {
  return (
    <div>
      <MainSlider />
      <AboutCompany />
      <Services />
      <News />
    </div>
  );
};

export default HomeContainer;
