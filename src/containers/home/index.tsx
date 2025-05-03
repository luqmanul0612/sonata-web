import AboutCompany from "./about-company";
import Clients from "./clients";
import MainSlider from "./main-slider";
import News from "./news";
import Projects from "./projects";
import Services from "./services";
import classNames from "./home.module.scss";
import Offers from "./offers";

const HomeContainer = () => {
  return (
    <div className={classNames.main}>
      <MainSlider />
      <AboutCompany />
      <Services />
      <Projects />
      <Clients />
      <Offers />
      <News />
    </div>
  );
};

export default HomeContainer;
