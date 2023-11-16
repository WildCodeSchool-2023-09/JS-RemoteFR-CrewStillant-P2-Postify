import { useState } from "react";
import Colors from "../components/CardGeneration/Colors";
import CardGeneration from "../components/CardGeneration/CardGeneration";

function PostCard() {
  const [savedColor, setSavedColor] = useState("white");
  const [savedFontColor, setSavedFontColor] = useState("#fffff");

  return (
    <>
      <Colors
        savedColor={savedColor}
        setSavedColor={setSavedColor}
        savedFontColor={savedFontColor}
        setSavedFontColor={setSavedFontColor}
      />
      <CardGeneration savedColor={savedColor} savedFontColor={savedFontColor} />
    </>
  );
}

export default PostCard;
