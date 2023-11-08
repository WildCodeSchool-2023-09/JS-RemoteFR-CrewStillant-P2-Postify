import AboutUS from "../components/AboutUs";
import Presentation from "../components/Presentation";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <div className="App">
      <Presentation />
      <AboutUS />
      <WhyUs />
    </div>
  );
}

export default Home;
