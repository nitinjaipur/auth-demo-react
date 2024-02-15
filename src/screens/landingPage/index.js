import './landingStyles.css'
import { Link } from "react-router-dom";

function LandingPage() {

  return (
    <div className="container">
      <h1>This is Landing page</h1>
      <button>
        <Link to="/login">Go to Login Page</Link>
      </button>
      <button>
        <Link to="/signup">Go to Registration Page</Link>
      </button>
    </div>
  );
}

export default LandingPage;
