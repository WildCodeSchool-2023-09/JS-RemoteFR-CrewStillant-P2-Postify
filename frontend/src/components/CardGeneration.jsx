import { useState } from "react";

function CardGeneration() {
  const [savedColor, setSavedColor] = useState("#ffffff");
  const [savedFontColor, setSavedFontColor] = useState("000000");
  const [savedSize, setSavedSize] = useState(15);

  const [savedFont, setSavedFont] = useState("Arial");

  const handleFontChange = (e) => {
    setSavedFont(e.target.value);
  };

  return (
    <div>
      <button type="button" onClick={() => setSavedSize(savedSize + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setSavedSize(savedSize - 1)}>
        Decrease
      </button>

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

      <select name="selectFont" onChange={handleFontChange}>
        <option value="Arial">Arial</option>
        <option value="Cambria">Cambria</option>
        <option value="Cochin">Cochin</option>
        <option value="Courier New">Courier New</option>
        <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
        <option value="Georgia">Georgia</option>
        <option value="Gill Sans">Gill Sans</option>
        <option value="Impact">Impact</option>
        <option value="Inter">Inter</option>
        <option value="Verdana">Verdana</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Trebuchet MS">Trebuchet MS</option>
      </select>

      <div>
        <p
          style={{
            background: savedColor,
            color: savedFontColor,
            fontFamily: savedFont,
            fontSize: savedSize,
          }}
        >
          Bonjour, je suis un texte de test! XD
        </p>
      </div>
    </div>
  );
}

export default CardGeneration;
