import React, { useState } from "react";

type Props = {};

export const SignUpForm = (props: Props) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    termsAgreed: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUserInfo({
      ...userInfo,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("success");
  };

  return (
    <main className="form__container">
      <div className="form__left-panel">
        <div className="form__heading-container">
          <h1 className="form__title">Sign up form</h1>
          <div className="img-container-48 hidden-desktop">
            <img
              src="src/assets/springer_logo.png"
              alt="springer nature logo"
            />
          </div>
        </div>
        <em className="form__description">All fields are required.</em>
        <form className="form__inputs-container" onSubmit={handleSubmit}>
          <div className="form__input-row">
            <label className="form__label" htmlFor="first-name">
              First name
            </label>
            <input
              className="form__input"
              type="text"
              name="firstName"
              id="first-name"
              value={userInfo.firstName}
              onChange={handleUserInfoChange}
              placeholder="ex: Jane"
              required
            />
          </div>
          <div className="form__input-row">
            <label className="form__label" htmlFor="last-name">
              Last name
            </label>
            <input
              className="form__input"
              type="text"
              name="lastName"
              id="last-name"
              value={userInfo.lastName}
              onChange={handleUserInfoChange}
              placeholder="ex: Doe"
              required
            />
          </div>
          <div className="form__input-row">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              type="email"
              name="emailAddress"
              id="email"
              value={userInfo.emailAddress}
              onChange={handleUserInfoChange}
              placeholder="ex: jane.doe@gmail.com"
              required
            />
          </div>
          <div className="form__input-row">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <div>
              <div className="input-with-btn">
                <input
                  className="form__input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={userInfo.password}
                  onChange={handleUserInfoChange}
                  title="Minimum 12 characters. Must contain at least 2 upper case letters, 2 numbers, and 2 symbols."
                  pattern="^(?=(.*[A-Z]){2})(?=(.*\d){2})(?=(.*[\W_]){2}).{12,}$"
                  required
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword((s) => !s);
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ul className="form__password-reqs">
                <li>Minimum 12 characters</li>
                <li>
                  Must contain at least 2 upper case letters, 2 numbers, and 2
                  symbols
                </li>
              </ul>
            </div>
          </div>
          <div className="form__input-row">
            <label className="form__label" htmlFor="confirm-password">
              Confirm password
            </label>
            <div className="input-with-btn">
              <input
                className="form__input"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirm-password"
                value={userInfo.confirmPassword}
                onChange={handleUserInfoChange}
                title="Must match password."
                pattern={`^${userInfo.password}$`}
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowConfirmPassword((s) => !s);
                }}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="form__input-row">
            <label className="form__label" htmlFor="terms-conditions">
              Terms and conditions
            </label>
            <div className="flex-row gap-half">
              <input
                type="checkbox"
                name="termsAgreed"
                id="terms-conditions"
                checked={userInfo.termsAgreed}
                onChange={handleUserInfoChange}
                required
              />
              <label htmlFor="terms-conditions">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          <button className="form__submit-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="form__right-panel visible-desktop">
        <div className="form__logo-bg-bar">
          <div className="img-container-128">
            <img
              src="src/assets/springer_logo.png"
              alt="springer nature logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
