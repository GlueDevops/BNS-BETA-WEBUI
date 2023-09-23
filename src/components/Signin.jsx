import React, { useRef, useState } from "react";
import { SIGNIN, http } from "../api";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const [check, setCheck] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [isPasswordShort, setIsPasswordShort] = useState(false);
  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };
  const [isMobileSignupOpen, setIsMobileSignupOpen] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);

  async function handleSignin() {
    if (!validateEmail(emailRef.current.value)) setEmailWarning(true);
    if (passwordRef.current.value.length < 8) setIsPasswordShort(true);
    if (
      !validateEmail(emailRef.current.value) ||
      passwordRef.current.value.length < 8
    )
      return null;
    await http.get("/sanctum/csrf-cookie");
    await http
      .post(SIGNIN, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
          // if (check)
          localStorage.setItem("token", res.data?.token);
          // else sessionStorage.setItem("token", res.data?.token);
          // window.location = "/home";
        }
        if (res.status === 200) {
          toast.error(res);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const submit = (e) => {
    e.preventDefault();
    handleSignin();
  };

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
              <form className='sign-inputs-mobile' onSubmit={(e) => submit(e)}>
                <h1 className='sign-header-text-mobile'>SIGN IN</h1>
                <input
                  type='email'
                  className='input-field'
                  ref={emailRef}
                  maxLength={75}
                  onChange={() => {
                    setEmailWarning(false);
                  }}
                  placeholder='Email'
                />
                {emailWarning ? (
                  <div
                    className='require-sign'
                    style={{ textAlign: "start", paddingBottom: "10px" }}>
                    Email is not valid{" "}
                  </div>
                ) : null}
                <div className='password-container'>
                  <input
                    type={isShowPass ? "text" : "password"}
                    className='input-field'
                    placeholder='Password'
                    ref={passwordRef}
                    onChange={() => {
                      setIsPasswordShort(false);
                    }}
                  />
                  <span
                    className='password-show'
                    onClick={() => setIsShowPass(!isShowPass)}>
                    {isShowPass ? (
                      <span className='material-symbols-outlined'>
                        visibility_off
                      </span>
                    ) : (
                      <span className='material-symbols-outlined'>visibility</span>
                    )}
                  </span>
                  {isPasswordShort ? (
                    <div
                      className='require-sign'
                      style={{ textAlign: "start", paddingBottom: "10px" }}>
                      Password must contain at least 8 characters
                    </div>
                  ) : null}
                </div>
                <button className='main-btn'>Sign in</button>
                <button className='secondary-btn forgot-styling'>
                  Forgot Password?
                </button>
                <Link
                  to='/signup'
                  className='main-btn already-styling d-flex justify-content-center align-items-center'>
                  Don't have an account? Sign up
                </Link>

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
        <form className='sign-inputs' onSubmit={(e) => submit(e)}>
          <h1 className='sign-header-text'>SIGN UP</h1>
          <input
            type='email'
            className='input-field'
            ref={emailRef}
            maxLength={75}
            onChange={() => {
              setEmailWarning(false);
            }}
            placeholder='Email'
          />
          {emailWarning ? (
            <div
              className='require-sign'
              style={{ textAlign: "start", paddingBottom: "10px" }}>
              Email is not valid{" "}
            </div>
          ) : null}
          <div className='password-container'>
            <input
              type={isShowPass ? "text" : "password"}
              className='input-field'
              placeholder='Password'
              ref={passwordRef}
              onChange={() => {
                setIsPasswordShort(false);
              }}
            />
            <span
              className='password-show'
              onClick={() => setIsShowPass(!isShowPass)}>
              {isShowPass ? (
                <span className='material-symbols-outlined'>visibility_off</span>
              ) : (
                <span className='material-symbols-outlined'>visibility</span>
              )}
            </span>
            {isPasswordShort ? (
              <div
                className='require-sign'
                style={{ textAlign: "start", paddingBottom: "10px" }}>
                Password must contain at least 8 characters
              </div>
            ) : null}
          </div>
          <button className='main-btn'>Sign in</button>
          <button className='secondary-btn forgot-styling'>Forgot Password?</button>
          <Link
            to='/signup'
            className='main-btn already-styling d-flex justify-content-center align-items-center'>
            Don't have an account? Sign up
          </Link>
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
