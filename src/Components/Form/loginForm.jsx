import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import sendRequest from "../../Services/CommonServices";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false); // Move this declaration to the top
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  console.log({ username, password });

  const handleUsername = (e) => {
    console.log("username", e);
    setUsername(e.target.value);
    const value = e.target.value;
    setUsername(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      username: value.trim() ? "" : "Username is required",
    }));
  };

  const handlePassword = (e) => {
    console.log("password", e);
    setPassword(e.target.value);
    const value = e.target.value;
    setPassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: value.trim() ? "" : "Password is required",
    }));
  };

  const handleApi = async (e) => {
    e.preventDefault();

    // Check if username or password is empty
    if (!username.trim()) {
      setErrors({ ...errors, username: "Username is required" });
      return;
    }

    if (!password.trim()) {
      setErrors({ ...errors, password: "Password is required" });
      return;
    }

    try {
      const requestUserData = {
        userName: username,
        password: password,
      };

      const response = await sendRequest("post", "/login", requestUserData);
      console.log(response, "response");

      if (response.status === 200) {
        console.log("Success:", response.data);

        // Assuming the server returns a token upon successful login
        const token = response.data.data.token;

        // Store the token securely, e.g., in a secure HTTP-only cookie or local storage
        localStorage.setItem("token", response.data.data.token);
        console.log("Token:", response.data.data.token);
        localStorage.setItem("token", token);

        // Redirect to another page after successful login
        // navigate('/dashboard');

        const role = response.data.data.role;

        if (role === "SUPER ADMIN") {
          navigate("/dashboard");
        } else if (role === "ADMIN") {
          navigate("/AdminDashBoard");
        } else if (role === "COACH") {
          navigate("/CoachDashboard");
        } else if (role === "HR") {
          navigate("/HRDashboardPage");
        } else if (role === "ACCOUNTANT") {
          navigate("/AccountDashboardPage");
        } else if (role === "MEDIA CENTER") {
          navigate("/InventoryDashboardPage");
        } else if (role === "ONLINE STORE") {
          navigate("/MediaCenterDashboardPage");
        } else if (role === "INVENTORY") {
          navigate("/InventoryDashboardPage");
        }
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        // Handle specific HTTP status codes
        if (error.response.status === 404) {
          setUsernameError("Incorrect username");
          setPasswordError("Incorrect password");
        } else if (error.response.status === 422) {
          const errorMessage =
            error.response.data?.message || "Validation error";
          // handle other validation errors as needed
        } else {
          // Handle other errors, show error messages, etc.
          // handle other server errors as needed
        }
      } else {
        // Handle network errors or other unexpected errors
        // handle unexpected errors as needed
      }
    }
  };

  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <input
            type="text"
            name="uname"
            placeholder=" &ensp; Username"
            value={username}
            onChange={handleUsername}
          />
          <span className="error">{errors.username}</span>
          <span className="error">{usernameError}</span>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="pass"
            placeholder="&ensp; Password"
            value={password}
            onChange={handlePassword}
          />
          <span className="error">{errors.password}</span>
          <span className="error">{passwordError}</span>
        </div>
        <div className="input-container ">
          <button
            type="submit"
            className="signinbutton py-1"
            onClick={handleApi}
            disabled={!username || !password}
          >
            SIGN IN
          </button>
        </div>

        {/* Display different messages for incorrect username and password */}
        {usernameError && <div className="error-message">{usernameError}</div>}
        {passwordError && <div className="error-message">{passwordError}</div>}
      </form>
      <p className="text-white mt-2 text-center fsize">
        all Copyrights @ALIBTISAM{" "}
      </p>
    </div>
  );

  return (
    <>
      <Header />

      <div className="loginbox">
        <div className="login-form">
          <div className=" d-flex justify-content-center  ">
            <h6 className="text-white mt-4  ">
              ALIBTISAM <br />
              <span className="mx-5">الابتسام</span>{" "}
            </h6>
            <img
              src="images/icon.png"
              alt="image"
              srcset=""
              width="80"
              height="80"
              className="roundedimage "
            />
          </div>
          <div className="title text-center text-white ">login</div>
          <hr className="text-white"></hr>
          {isSubmitted ? (
            <div className="text-white">
              Super Admin is successfully logged in
            </div>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
