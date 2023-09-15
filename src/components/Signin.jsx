import React, { useState } from "react";
const Signin = () => {
  const [isMobileSignupOpen, setIsMobileSignupOpen] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
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
          {/* ----- Mobile Signin form --- */}
          {isMobileSignupOpen ? (
            <div className='mobile-sign'>
              <form className='sign-inputs-mobile'>
                <h1 className='sign-header-text-mobile'>SIGN IN</h1>
                <input type='email' className='input-field' placeholder='Email' />
                <div className='password-container'>
                  <input
                    type={isShowPass ? "text" : "password"}
                    className='input-field'
                    placeholder='Password'
                  />
                  <span
                    className='password-show'
                    onClick={() => setIsShowPass(!isShowPass)}>
                    {isShowPass ? (
                      <span class='material-symbols-outlined'>visibility_off</span>
                    ) : (
                      <span class='material-symbols-outlined'>visibility</span>
                    )}
                  </span>
                </div>
                <button className='main-btn'>Sign in</button>
                <button className='secondary-btn forgot-styling'>
                  Forgot Password?
                </button>
                <button className='main-btn already-styling'>
                  Don't have an account? Sign up
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
          <input type='email' className='input-field' placeholder='Email' />
          <div className='password-container'>
            <input
              type={isShowPass ? "text" : "password"}
              className='input-field'
              placeholder='Password'
            />
            <span
              className='password-show'
              onClick={() => setIsShowPass(!isShowPass)}>
              {isShowPass ? (
                <span class='material-symbols-outlined'>visibility_off</span>
              ) : (
                <span class='material-symbols-outlined'>visibility</span>
              )}
            </span>
          </div>
          <button className='main-btn'>Sign in</button>
          <button className='secondary-btn forgot-styling'>Forgot Password?</button>
          <button className='main-btn already-styling'>
            Don't have an account? Sign up
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

export default Signin;
