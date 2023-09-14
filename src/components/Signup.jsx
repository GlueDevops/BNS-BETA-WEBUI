import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [isMobileSignupOpen, setIsMobileSignupOpen] = useState(false);
  return (
    <div className='overall-container sign-container'>
      {/* ---------- Left Side ----------- */}
      <div className='left-sign'>
        <div className='sign-welcome'>
          <div className='temp-logo'>LOGO</div>
          <p className='header-small'>The Trusted</p>
          <p className='header-big'>Business Network</p>
          <div className='sign-quote'>
            <div className='quote-img'></div>
            <p className='quote-text'>
              “ Dummy text refers to the bits of content that are used to fill a
              website mock-up. “
            </p>
          </div>
          {/* ----- Mobile Signup form --- */}
          {isMobileSignupOpen ? (
            <div className='mobile-sign'>
              <form className='sign-inputs-mobile'>
                <h1 className='sign-header-text-mobile'>SIGN UP</h1>
                <div className='two-cols-input-container'>
                  <input
                    type='text'
                    className='two-cols-input-field'
                    placeholder='First Name'
                  />
                  <input
                    type='text'
                    className='two-cols-input-field'
                    placeholder='Last Name'
                  />
                </div>
                <select className='input-field'>
                  <option value='' hidden>
                    Country
                  </option>
                </select>
                <input type='email' className='input-field' placeholder='Email' />
                <div className='two-cols-input-container'>
                  <input
                    type='text'
                    className='two-cols-input-field'
                    placeholder='Create Password'
                  />
                  <input
                    type='text'
                    className='two-cols-input-field'
                    placeholder='Repeat Password'
                  />
                </div>
                <p className='sign-terms'>
                  By Register, you agree to our <Link>Terms</Link>,{" "}
                  <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link> . You
                  may receive email notifications from us and can opt out at anytime.
                </p>
                <button className='main-btn'>Register</button>
                <button className='main-btn already-styling'>
                  Already have an account?
                </button>
                <p className='get-app-text'>GET THE MOBILE APP</p>
                <div className='get-app-container-mobile'>
                  <div className='temp-app'></div>
                  <div className='temp-app'></div>
                </div>
                {/* <p className='login-text'>Already have an account?</p>
        <button className='secondary-btn text-center'>
          <Link to='/login' className='d-block'>
            Log into your account
          </Link>
        </button> */}
              </form>
            </div>
          ) : (
            <button
              className='main-btn welcome-sign-btn'
              onClick={() => setIsMobileSignupOpen(true)}>
              SIGN UP
            </button>
          )}

          <ul className='sign-links'>
            <li>About</li>
            <li>How its works</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      {/* ---------- Right Side ----------- */}
      <div className='right-sign'>
        <form className='sign-inputs'>
          <h1 className='sign-header-text'>SIGN UP</h1>
          <div className='two-cols-input-container'>
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='First Name'
            />
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='Last Name'
            />
          </div>
          <select className='input-field'>
            <option value='' hidden>
              Country
            </option>
          </select>
          <input type='email' className='input-field' placeholder='Email' />
          <div className='two-cols-input-container'>
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='Create Password'
            />
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='Repeat Password'
            />
          </div>
          <p className='sign-terms'>
            By Register, you agree to our <Link>Terms</Link>,{" "}
            <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link> . You may
            receive email notifications from us and can opt out at anytime.
          </p>
          <button className='main-btn'>Register</button>
          <button className='main-btn already-styling'>
            Already have an account?
          </button>
          <p className='get-app-text'>GET THE MOBILE APP</p>
          <div className='get-app-container'>
            <div className='temp-app'></div>
            <div className='temp-app'></div>
          </div>
          {/* <p className='login-text'>Already have an account?</p>
        <button className='secondary-btn text-center'>
          <Link to='/login' className='d-block'>
            Log into your account
          </Link>
        </button> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
