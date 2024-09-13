import "./Home.css";
import CAVERN from "../pictures/images.jpg";

function Home() {
  return (
    <>
      <div>
        <h1 className="welcome">Welcome to the Cavern Club!</h1>
      </div>

      <div className="img">
        <img src={CAVERN} alt="cavernClub"></img>
      </div>
    </>
  );
}

export default Home;
