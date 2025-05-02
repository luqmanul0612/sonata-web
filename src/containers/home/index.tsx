import AboutCompany from "./about-company";
import MainSlider from "./main-slider";
import News from "./news";
import Projects from "./projects";
import Services from "./services";

const HomeContainer = () => {
  return (
    <div>
      <MainSlider />
      <AboutCompany />
      <Services />
      <Projects />
      <News />
    </div>
  );
};

export default HomeContainer;
