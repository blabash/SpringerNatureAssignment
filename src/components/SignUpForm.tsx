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
  };

  return (
    <main className="form-container">
      <h1 className="form__title">Sign up form</h1>
      <em className="form__description">All fields are required.</em>
      <form className="inputs-container" onSubmit={handleSubmit}>
        <div className="flex-col">
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
        <div className="flex-col">
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
        <div className="flex-col">
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
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
          />
        </div>
        <div className="flex-col">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password"
            value={userInfo.password}
            onChange={handleUserInfoChange}
            pattern=""
            required
          />
          <ul className="form__password-reqs">
            <li>Minimum 12 characters</li>
            <li>
              Must contain at least 2 upper case letters, 2 numbers, and 2
              symbols
            </li>
          </ul>
        </div>
        <div className="flex-col">
          <label className="form__label" htmlFor="confirm-password">
            Confirm password
          </label>
          <input
            className="form__input"
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={userInfo.confirmPassword}
            onChange={handleUserInfoChange}
            required
          />
        </div>
        <div className="flex-col">
          <label className="form__label" htmlFor="terms-conditions">
            Terms and conditions
          </label>
          <div className="flex-row">
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
    </main>
  );
};
