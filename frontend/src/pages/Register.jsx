import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData(() => e.target.value);
  };

  return (
    <section className="heading">
      <h1>
        <FaUser />
        Register
      </h1>
      <p>Please create an account!</p>
      <section className="form">
        <form className="form-control">
          <div className="form-group">
            <input
              type="text"
              id="name"
              required
              placeholder="Please, enter your Username."
              value={name}
              onChange={onChange}
            />
            <input
              type="email"
              id="name"
              required
              placeholder="Please, enter your email."
              value={email}
              onChange={onChange}
            />
            <input
              type="password"
              id="name"
              required
              placeholder="Please, enter your password."
              value={password}
              onChange={onChange}
            />
            <input
              type="password"
              id="name"
              required
              placeholder="Please, Confirm your password."
              value={password2}
              onChange={onChange}
            />
          </div>
        </form>
      </section>
    </section>
  );
}

export default Register;
