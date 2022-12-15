import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  console.log(navigate);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1em",
      }}
    >
      <form style={{ width: "30%" }}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
          <h3 style={{ margin: "1em 0" }}>{email}</h3>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {/* <button onClick={handleClick} className="forgot-password text-right">
        Register{" "}
      </button> */}
    </div>
  );
}
