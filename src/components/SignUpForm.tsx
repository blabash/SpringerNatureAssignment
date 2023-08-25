import React from "react";

type Props = {};

export const SignUpForm = (props: Props) => {
  const handleSubmit = () => {};

  return (
    <main className="main-container">
      <h1>Sign up form</h1>
      <p>All fields are required.</p>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          name="name"
          id="first-name"
          placeholder="ex: Jane"
          required
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          name="name"
          id="last-name"
          placeholder="ex: Doe"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ex: jane.doe@gmail.com"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          pattern=""
          required
        />
        <ul className="form__password-reqs">
          <li>Minimum 12 characters</li>
          <li>
            Must contain at least 2 upper case letters, 2 numbers, and 2 symbols
          </li>
        </ul>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" name="password" id="confirm-password" required />
        <label htmlFor="terms-conditions">Terms and conditions</label>
        <label htmlFor="terms-conditions">
          <input
            type="checkbox"
            name="terms-conditions"
            id="terms-conditions"
            required
          />{" "}
          I agree to the terms and conditions
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
};
