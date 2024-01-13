import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DarkModeButton } from "../../components";
import { ThemeContext } from "../../provider/ThemeProvider";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // Redirect to home if user is already logged in
  if (user) {
    navigate("/", { replace: true });
    return null;
  }

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    login({ email: email, password: pwd });
    navigate(from, { replace: true });
  };
  return (
    <div
      className={`hero min-h-screen bg-base-200  ${
        theme == "dark"
          ? "bg-nutralColorNineHundread border border-primaryNineHundread"
          : "bg-white"
      }`}
    >
      <div className="hero-content w-full flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="flex justify-center py-2">
          <DarkModeButton></DarkModeButton>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className={`card-body `}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleSignIn}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
