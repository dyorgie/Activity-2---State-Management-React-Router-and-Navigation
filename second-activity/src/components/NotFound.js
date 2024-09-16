import "../components/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="error">
        <h1>404 ERROR</h1>

        <p>
          {" "}
          Go to the <Link to="/">Homepage</Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
