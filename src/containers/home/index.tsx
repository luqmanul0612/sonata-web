import AboutCompany from "./about-company";
import MainSlider from "./main-slider";
import News from "./news";
import Projects from "./projects";
import Services from "./services";
import classNames from "./home.module.scss";
import Offers from "./offers";
import Location from "./location";

const HomeContainer = () => {
  return (
    <div className={classNames.main}>
      <MainSlider />
      <AboutCompany />
      <Services />
      <Projects />
      {/* <Clients /> */}
      <Offers />
      <News />
      <Location />
    </div>
  );
};

export default HomeContainer;
