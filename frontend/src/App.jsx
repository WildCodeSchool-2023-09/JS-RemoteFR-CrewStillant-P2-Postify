import { useEffect, useState } from "react";
import "./App.css";
import HeaderText from "./components/HeaderText";
import MidSection from "./components/MidSection";
import CardGeneration from "./components/CardGeneration";

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
      <HeaderText />
      <div className="container">
        {data &&
          data.photos.map((a) => (
            <img src={a.src.small} alt="Marche pas..." key={a.id} />
          ))}
      </div>
      <CardGeneration />
      <MidSection />
    </div>
  );
}

export default App;
