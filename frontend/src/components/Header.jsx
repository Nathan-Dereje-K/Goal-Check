import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="login">GoalSetter</div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt size={25} />
            Login
          </Link>
        </li>

        <li>
          <Link to="/register">
            <FaUser size={25} />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
