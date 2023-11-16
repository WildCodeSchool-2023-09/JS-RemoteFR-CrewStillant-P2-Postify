import { useEffect, useState } from "react";
import "./app.css";
import HeaderText from "./components/HeaderText/HeaderText";
import MidSection from "./components/MidSection/MidSection";
import CardGeneration from "./components/CardGeneration";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=fruits&per_page=4`, {
      headers: {
        Authorization:
          "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((datas) => {
        setData(datas);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderText />
      <div className="container">
        {data &&
          data.photos.map((a) => (
            <img src={a.src.small} alt="Marche pas..." key={a.id} />
          ))}
      </div>
      <CardGeneration />
      <MidSection />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
