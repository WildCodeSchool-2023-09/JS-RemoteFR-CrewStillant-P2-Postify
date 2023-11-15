import { useState } from "react";

function CardGeneration() {
  const [savedColor, setSavedColor] = useState("#ffffff");
  const [savedFontColor, setSavedFontColor] = useState("000000");
  const [savedFont, setSavedFont] = useState("");

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
      <select>
        <option onClick={() => setSavedFont("Arial")} value={savedFont}>
          Arial
        </option>
        <option onClick={() => setSavedFont("Cambria")} value={savedFont}>
          Cambria
        </option>
        <option onClick={() => setSavedFont("Cochin")} value={savedFont}>
          Cochin
        </option>
        <option onClick={() => setSavedFont("Courier New")} value={savedFont}>
          Courier New
        </option>
        <option
          onClick={() => setSavedFont("Franklin Gothic Medium")}
          value={savedFont}
        >
          Franklin Gothic Medium
        </option>
        <option onClick={() => setSavedFont("Georgia")} value={savedFont}>
          Georgia
        </option>
        <option onClick={() => setSavedFont("Gill Sans")} value={savedFont}>
          Gill Sans
        </option>
        <option onClick={() => setSavedFont("Impact")} value={savedFont}>
          Impact
        </option>
        <option onClick={() => setSavedFont("Inter")} value={savedFont}>
          Inter
        </option>
        <option onClick={() => setSavedFont("Verdana")} value={savedFont}>
          Verdana
        </option>
        <option onClick={() => setSavedFont("Tahoma")} value={savedFont}>
          Tahoma
        </option>
        <option
          onClick={() => setSavedFont("Times New Roman")}
          value={savedFont}
        >
          Times New Roman
        </option>
        <option onClick={() => setSavedFont("Trebuchet MS")} value={savedFont}>
          Trebuchet MS
        </option>
      </select>

      <div>
        <p
          style={{
            background: savedColor,
            color: savedFontColor,
            fontFamily: savedFont,
          }}
        >
          Bonjour, je suis un texte de test! XD
        </p>
      </div>
    </div>
  );
}

export default CardGeneration;
