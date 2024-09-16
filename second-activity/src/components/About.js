import "../components/About.css";
import quarrymen from "../pictures/quarrymen.jpg";
import bnw from "../pictures/beatles-blackandwhite.jpg";
import seventies from "../pictures/70s-cavern.jpg";
import eighties from "../pictures/80s-cavern.jpg";
import nineties from "../pictures/90s-cavern.jpg";
import thousands from "../pictures/2000s-fi.jpg";
import modern from "../pictures/Cavern-Entry-Current-870x580.jpg";

function About() {
  return (
    <>
      <div>
        <h1>What is the "Cavern Club?"</h1>
      </div>

      <div className="firstParagraph">
        <p>
          Through seven eventful decades, before, during and after The Beatles
          this legendary cellar has seen its share of setbacks yet has played a
          role in each epoch of music, from 1950s jazz to 21st century indie
          rock. Take a look at the Cavern’s rollercoaster ride through the
          decades and discover how it survived the setbacks and closures to
          become the most famous music club in the world!
        </p>
      </div>

      <div>
        <img src={quarrymen} alt="quarrymen"></img>
        <img src={bnw} alt="quarrymen"></img>
        <img src={seventies} alt="quarrymen"></img>
        <img src={eighties} alt="quarrymen"></img>
        <img src={nineties} alt="quarrymen"></img>
        <img src={thousands} alt="quarrymen"></img>
        <img src={modern} alt="quarrymen"></img>
      </div>
    </>
  );
}

export default About;
