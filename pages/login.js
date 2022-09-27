import React, { useRef, useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import Spinner from "../loaders/Spinner";

export default function Login() {
  const [validForm, setValidForm] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const regexRef = useRef({
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  });
  const route = useRouter();

  const { signIn, loading, currentUser } = useAuthContext();

  if (currentUser) {
    route.replace("/");
  }

  function formValidation(field, regex) {
    if (regex.test(field.value)) {
      field.className = "valid__formfield";
      setValidForm(true);
    } else {
      field.className = "invalid__formfield";
      setValidForm(false);
    }
  }

  function keyUpHandler(e) {
    formValidation(e.target, regexRef.current[e.target.id]);
  }

  async function loginHandler(e) {
    e.preventDefault();
    if (validForm) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      if (email && password) {
        await signIn(email, password);
        route.replace("/");
      } else {
        alert("Error!..");
      }
    } else {
      alert("Something went wrong!");
    }
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={styles.signUp__container}>
      <div className={styles.form__container}>
        <h1>Log in</h1>
        <form
          id={styles.signUp__form}
          autoComplete="off"
          onSubmit={loginHandler}
        >
          <button className="form-btn">Continue with Google</button>
          <div className={styles.or__line}>or</div>
          <div className={styles.manual__signUp__container}>
            <div className={styles.email__div}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                onKeyUp={keyUpHandler}
                ref={emailRef}
              />
              <p className="validation__info">Email must be valid address</p>
            </div>
            <div className={styles.password__div}>
              <label htmlFor="password">Enter password</label>
              <input
                type="password"
                id="password"
                required
                placeholder="Enter password"
                onKeyUp={keyUpHandler}
                ref={passwordRef}
              />
              <p className="validation__info">
                Password must contain atleast 6 characters max 16
              </p>
            </div>
            <button
              onClick={loginHandler}
              disabled={!validForm}
              className="form-btn"
            >
              Login
            </button>
            <div className={styles.login__link}>
              Don&apos;t Have an account?
            </div>
            <Link href="/signup">
              <button className="form-btn">Sign up</button>
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.img__container}>
        <img
          src="/assets/login_img.jpg"
          alt="login illustration"
          className={styles.img}
        />
      </div>
    </div>
  );
}
