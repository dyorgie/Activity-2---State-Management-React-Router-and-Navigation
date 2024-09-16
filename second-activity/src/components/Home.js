import "./Home.css";
import CAVERN from "../pictures/images.jpg";

function Home() {
  return (
    <>
      <div>
        <h1 className="welcome">Welcome to the Cavern Club!</h1>
      </div>

      <div className="image">
        <a href="https://www.cavernclub.com/" target="_blank" rel="noreferrer">
          <img src={CAVERN} alt="cavernClub"></img>
        </a>
      </div>
    </>
  );
}

export default Home;
