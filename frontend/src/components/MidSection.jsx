import "./midSection.css";
import image from "../assets/MidSectionPic.png";

function MidSection() {
  return (
    <div className="midSection">
      <img className="imageLetter" src={image} alt="MidSection pas affichée" />
      <h2>POSTIFY TO YOU</h2>
      <p>
        Créez une carte magnifique et passionnante pour donner des nouvelles ou
        annoncer un bon événement. Ce site est fait pour vous, propulsé par la
        plus grande bibliothèque d'images sur le Web.
      </p>
    </div>
  );
}

export default MidSection;
