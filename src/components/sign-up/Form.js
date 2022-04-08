import React, { useState } from "react";
import ImgBox from "./ImgBox";
import { AiOutlineEye } from "react-icons/ai";
import validation from "./validation";
import "./sign.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [isNextPage, setIsNextPage] = useState(false);
  let navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    values.name !== "" && values.email !== "" && values.password !== ""
      ? setIsNextPage(true)
      : setIsNextPage(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isNextPage ? navigate("/maincomponent") : navigate("/sign");
    setErrors(validation(values));
  };

  const [show, setShow] = useState(false);
  const showPassword = () => {
    setShow((prev) => !prev);
  };

  return (
    <section className="sign--section">
      <div className="container">
        <div className="sign--section--flex">
          <ImgBox />

          <form className="sign--section--info">
            <h1>Welcome to Lilies!</h1>
            <div>
              <input
                type="text"
                placeholder="Your First Name"
                name="name"
                className="user--name"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="user--email"
                placeholder="Your Email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="sign--password">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Your Password"
                  id="sign--password"
                  className="user--password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <AiOutlineEye className="eye--icon" onClick={showPassword} />
              </label>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button type="submit" onClick={handleFormSubmit}>
              SIGN UP
            </button>
            <p>
              Already have an account. <strong>LOGIN</strong>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Form;
