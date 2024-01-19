import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onClick = () => {
    alert("New user Registered!");
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        {/* <p>Create a new account</p> */}
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="name"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="name"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
        <p>
          New to Goal Setter? <Link to="/register">Register</Link>
        </p>
      </section>
    </>
  );
}

export default Login;
