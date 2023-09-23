import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES, SIGNUP, http } from "../api";
import axios from "axios";
import { toast } from "react-hot-toast";
const Signup = () => {
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);

  const [countries, setCountries] = useState([]);
  const [countryId, setCountryId] = useState(0);
  const [emailWarning, setEmailWarning] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isPassIndetical, setIsPassIndetical] = useState(true);
  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
  const [isCountryEmpty, setIsCountryEmpty] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileSignupOpen, setIsMobileSignupOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("1");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  function validatePassword(password) {
    // Regular expressions for each requirement
    const lengthRegex = /^.{8,}$/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const symbolRegex = /[\W_]/;
    const numberRegex = /\d/;

    // Checking each requirement using regular expressions
    const hasLength = lengthRegex.test(password);
    const hasUpperCase = upperCaseRegex.test(password);
    const hasLowerCase = lowerCaseRegex.test(password);
    const hasSymbol = symbolRegex.test(password);
    const hasNumber = numberRegex.test(password);

    // Returning true if all requirements are met, false otherwise
    return hasLength && hasUpperCase && hasLowerCase && hasSymbol && hasNumber;
  }

  const onSelectHandler = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    if (option === 9999) return setIsCountryEmpty(true);
    setIsCountryEmpty(false);
    setCountryId(option);
  };

  async function handleSignup() {
    if (!countryId) setIsCountryEmpty(true);
    if (!fNameRef.current.value) setIsFirstNameEmpty(true);
    if (!lNameRef.current.value) setIsLastNameEmpty(true);
    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      setIsPassIndetical(false);
    if (!validateEmail(emailRef.current.value)) setEmailWarning(true);
    if (!validatePassword(passwordRef.current.value)) setIsPasswordInvalid(true);
    if (
      !validateEmail(emailRef.current.value) ||
      !validatePassword(passwordRef.current.value) ||
      passwordRef.current.value !== confirmPasswordRef.current.value ||
      !fNameRef.current.value ||
      !lNameRef.current.value ||
      !countryId
      // || !businessRef.current.value
    )
      return null;
    // console.log(passwordRef.current.value, confirmPasswordRef.current.value);
    await http.get("/sanctum/csrf-cookie");
    console.log(
      fNameRef.current.value,
      lNameRef.current.value,
      selectedValue,
      emailRef.current.value,
      countryId,
      passwordRef.current.value,
      confirmPasswordRef.current.value
    );
    await http
      .post(SIGNUP, {
        first_name: fNameRef.current.value,
        last_name: lNameRef.current.value,
        is_entity: selectedValue,
        email: emailRef.current.value,
        country: countryId,
        password: passwordRef.current.value,
        password_confirmation: confirmPasswordRef.current.value,
        //         "first_name":"Mohamed",
        // "last_name":"Sharif",
        // "country": 1,
        // "is_entity": 2,
        // "email":"vinothganesan.contact@gmail.com",
        // "password":"PassGaurd@123",
        // "password_confirmation":"PassGaurd@123"
      })
      .then((res) => {
        if (res.status === 201) {
          // window.location = "/signin";
          console.log(res);
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
    handleSignup();
  };
  useEffect(() => {
    axios.get(COUNTRIES).then((response) => {
      setCountries(response.data?.countries);
      setIsLoading(false);
    });
  }, []);
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
              <form className='sign-inputs-mobile' onSubmit={(e) => submit(e)}>
                <h1 className='sign-header-text-mobile'>SIGN UP</h1>
                <div className='two-cols-input-container'>
                  <div className='w-100'>
                    <input
                      type='text'
                      className='two-cols-input-field'
                      placeholder='First Name'
                      ref={fNameRef}
                      maxLength={25}
                      onChange={() => setIsFirstNameEmpty(false)}
                    />
                    {isFirstNameEmpty ? (
                      <div className='require-sign-two-cols'>
                        First Name is required
                      </div>
                    ) : null}
                  </div>
                  <div className='w-100'>
                    <input
                      type='text'
                      className='two-cols-input-field'
                      placeholder='Last Name'
                      ref={lNameRef}
                      maxLength={25}
                      onChange={() => setIsLastNameEmpty(false)}
                    />
                    {isLastNameEmpty ? (
                      <div className='require-sign-two-cols'>
                        Last Name is required
                      </div>
                    ) : null}
                  </div>
                </div>
                <select
                  onChange={onSelectHandler}
                  className='input-field'
                  id='country'
                  required>
                  <option id={9999} key={9999} hidden>
                    Choose Your Country
                  </option>
                  {countries.map((c) => {
                    return (
                      <option id={c.id} key={c.id}>
                        {c.country_name}
                      </option>
                    );
                  })}
                </select>
                {isCountryEmpty ? (
                  <div
                    className='require-sign'
                    style={{ textAlign: "left", paddingBottom: "15px" }}>
                    Country Field is required
                  </div>
                ) : null}
                <input
                  type='email'
                  className='input-field'
                  placeholder='Email'
                  ref={emailRef}
                  maxLength={75}
                  onChange={() => {
                    setEmailWarning(false);
                  }}
                />
                {emailWarning ? (
                  <div
                    className='require-sign'
                    style={{ textAlign: "left", paddingBottom: "15px" }}>
                    Email is not valid{" "}
                  </div>
                ) : null}
                <div className='two-cols-input-container'>
                  <div className='password-container'>
                    <input
                      type={isShowPass ? "text" : "password"}
                      className='two-cols-input-field'
                      placeholder='New Password'
                      ref={passwordRef}
                      onChange={() => {
                        setIsPasswordInvalid(false);
                        setIsPassIndetical(true);
                      }}
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
                  <div className='password-container'>
                    <input
                      type={isShowConfirmPass ? "text" : "password"}
                      className='two-cols-input-field'
                      placeholder='ٌRepeat Password'
                      ref={confirmPasswordRef}
                      onChange={() => {
                        setIsPasswordInvalid(false);
                        setIsPassIndetical(true);
                      }}
                    />
                    <span
                      className='password-show'
                      onClick={() => setIsShowConfirmPass(!isShowConfirmPass)}>
                      {isShowConfirmPass ? (
                        <span class='material-symbols-outlined'>visibility_off</span>
                      ) : (
                        <span class='material-symbols-outlined'>visibility</span>
                      )}
                    </span>
                  </div>
                </div>
                {isPasswordInvalid ? (
                  <div
                    className='require-sign'
                    style={{
                      textAlign: "start",
                      width: "fit-content",
                    }}>
                    The password must contain:
                    <p>- Minimum 8 characters</p>
                    <p>- A mix of uppercase and lowercase letters</p>
                    <p>- Symbols (special characters) </p>- At least one number
                  </div>
                ) : null}
                {!isPasswordInvalid && !isPassIndetical ? (
                  <div className='require-sign'>
                    Password confirmation doesn't match password
                  </div>
                ) : null}
                {/* -------- Radio Selector ----------- */}
                <div className='form-check form-check-inline mb-2'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='inlineRadioOptions'
                    id='entity'
                    value='1'
                    onChange={handleRadioChange}
                    checked={true}
                  />
                  <label
                    className='form-check-label user-select-none'
                    htmlFor='entity'>
                    Entity
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='inlineRadioOptions'
                    id='non-entity'
                    value='0'
                    onChange={handleRadioChange}
                  />
                  <label
                    className='form-check-label user-select-none'
                    htmlFor='non-entity'>
                    Non Entity
                  </label>
                </div>
                <p className='sign-terms'>
                  By Register, you agree to our <Link>Terms</Link>,{" "}
                  <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link> . You
                  may receive email notifications from us and can opt out at anytime.
                </p>
                <button className='main-btn'>Register</button>
                <Link
                  to='/signin'
                  className='main-btn already-styling d-flex justify-content-center align-items-center'>
                  Already have an account?
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
          <div className='two-cols-input-container'>
            <div className='w-100'>
              <input
                type='text'
                className='two-cols-input-field'
                placeholder='First Name'
                ref={fNameRef}
                maxLength={25}
                onChange={() => setIsFirstNameEmpty(false)}
              />
              {isFirstNameEmpty ? (
                <div className='require-sign-two-cols'>First Name is required</div>
              ) : null}
            </div>
            <div className='w-100'>
              <input
                type='text'
                className='two-cols-input-field'
                placeholder='Last Name'
                ref={lNameRef}
                maxLength={25}
                onChange={() => setIsLastNameEmpty(false)}
              />
              {isLastNameEmpty ? (
                <div className='require-sign-two-cols'>Last Name is required</div>
              ) : null}
            </div>
          </div>
          <select
            onChange={onSelectHandler}
            className='input-field'
            id='country'
            required>
            <option id={9999} key={9999} hidden>
              Choose Your Country
            </option>
            {countries.map((c) => {
              return (
                <option id={c.id} key={c.id}>
                  {c.country_name}
                </option>
              );
            })}
          </select>
          {isCountryEmpty ? (
            <div
              className='require-sign'
              style={{ textAlign: "left", paddingBottom: "15px" }}>
              Country Field is required
            </div>
          ) : null}
          <input
            type='email'
            className='input-field'
            placeholder='Email'
            ref={emailRef}
            maxLength={75}
            onChange={() => {
              setEmailWarning(false);
            }}
          />
          {emailWarning ? (
            <div
              className='require-sign'
              style={{ textAlign: "left", paddingBottom: "15px" }}>
              Email is not valid{" "}
            </div>
          ) : null}
          <div className='two-cols-input-container'>
            <div className='password-container'>
              <input
                type={isShowPass ? "text" : "password"}
                className='two-cols-input-field'
                placeholder='New Password'
                ref={passwordRef}
                onChange={() => {
                  setIsPasswordInvalid(false);
                  setIsPassIndetical(true);
                }}
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
            <div className='password-container'>
              <input
                type={isShowConfirmPass ? "text" : "password"}
                className='two-cols-input-field'
                placeholder='Repeat Password'
                ref={confirmPasswordRef}
                onChange={() => {
                  setIsPasswordInvalid(false);
                  setIsPassIndetical(true);
                }}
              />
              <span
                className='password-show'
                onClick={() => setIsShowConfirmPass(!isShowConfirmPass)}>
                {isShowConfirmPass ? (
                  <span class='material-symbols-outlined'>visibility_off</span>
                ) : (
                  <span class='material-symbols-outlined'>visibility</span>
                )}
              </span>
            </div>
          </div>
          {isPasswordInvalid ? (
            <div
              className='require-sign'
              style={{
                textAlign: "start",
                width: "fit-content",
              }}>
              The password must contain:
              <p>- Minimum 8 characters</p>
              <p>- A mix of uppercase and lowercase letters</p>
              <p>- Symbols (special characters) </p>- At least one number
            </div>
          ) : null}
          {!isPasswordInvalid && !isPassIndetical ? (
            <div className='require-sign'>
              Password confirmation doesn't match password
            </div>
          ) : null}
          {/* -------- Radio Selector ----------- */}
          <div>
            <div className='form-check form-check-inline mb-2'>
              <input
                className='form-check-input'
                type='radio'
                name='inlineRadioOptions'
                id='entity'
                value='1'
                onChange={handleRadioChange}
                checked={true}
              />
              <label className='form-check-label user-select-none' htmlFor='entity'>
                Entity
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='inlineRadioOptions'
                id='non-entity'
                value='0'
                onChange={handleRadioChange}
              />
              <label
                className='form-check-label user-select-none'
                htmlFor='non-entity'>
                Non Entity
              </label>
            </div>
          </div>
          <p className='sign-terms'>
            By Register, you agree to our <Link>Terms</Link>,{" "}
            <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link> . You may
            receive email notifications from us and can opt out at anytime.
          </p>
          <button className='main-btn'>Register</button>
          <Link
            to='/signin'
            className='main-btn already-styling d-flex justify-content-center align-items-center'>
            Already have an account?
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

export default Signup;
