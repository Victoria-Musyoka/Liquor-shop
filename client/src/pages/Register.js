import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
  
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    fetch("/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputData),
    }).then((response) => {
   
      if (response.ok) {
        response.json().then((user) => console.log(user));
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  return (
    <div className="Reginto">
      <div>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <form onSubmit={handleSubmit}>
              <ul style={{ color: "red" }}>
                  <li>{errors[1]}</li>
                </ul>
              
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
             
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
               
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Confirm Password"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-900 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Create Account
                </button>
              </form>

              {/* <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div> */}

              <div className="text-grey-dark mt-6">
                Already have an account?
                <Link to="/signin">Signin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;