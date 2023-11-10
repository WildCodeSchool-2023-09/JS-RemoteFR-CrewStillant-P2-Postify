import "./midSection.css";
import image from "../../assets/MidSectionPic.png";

function MidSection() {
  return (
    <div className="midSection">
      <img className="imageLetter" src={image} alt="MidSection pas affichée" />
      <h2>POSTIFY TO YOU</h2>
      <p>
        Create a card beautiful and exciting moment to give some news or
        announce a good event. This site is made for you, powered by the largest
        image library on the web.{" "}
      </p>
    </div>
  );
}

export default MidSection;
