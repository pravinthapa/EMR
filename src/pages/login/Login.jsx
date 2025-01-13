import React from "react";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="EMR">
      <div className="EMR-SECTION">
        <img src={hero} alt="" />
      </div>

      <div className="login-form">
        <div className="EMR-Section">
          <h1>Welcome back!</h1>
          <p>Enter the following credentials to sign in</p>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
       
       <div className="select-group">
          <select>
            <option >General Ward</option>
            <option value="ICU">ICU</option>
            <option value="Emergency">Emergency</option>
          </select>
          <select>
            <option>Department</option>
            <option value="HR">HR</option>
            <option value={"IT"}>IT</option>
          </select>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="keep-logged" />
          <label htmlFor="keep-logged">Keep me logged in</label>
        </div>
        <div className="BUTTON">
        <Link className="w-[43%] text-center" to={"/"}>
                  <div className="login-button">
                    <button >
                     login
                    </button>
                  </div>
                </Link>
          
          <a href="#" className="forgot-password">
            Forget password?
          </a>
        </div>
      </div>
    </div>
  );
}
