import { useState } from "react";

function CardGeneration() {
  const [savedColor, setSavedColor] = useState("#ffffff");
  const [savedFontColor, setSavedFontColor] = useState("000000");
  return (
    <div>
      <input
        onChange={(e) => setSavedColor(e.target.value)}
        type="color"
        value={savedColor}
      />
      <input
        onChange={(e) => setSavedFontColor(e.target.value)}
        type="color"
        value={savedFontColor}
      />
      <div>
        <p style={{ background: savedColor, color: savedFontColor }}>AAAAAAA</p>
      </div>
    </div>
  );
}

export default CardGeneration;
