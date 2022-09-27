import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const { currentUser, logout } = useAuthContext();
  const route = useRouter();
  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const mobileNav = useRef();
  function burgerClickHandler() {
    setMenu(!menu);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo__container}>
          <div
            className={styles.logo__text}
            onClick={() => {
              route.replace("/");
            }}
          >
            ScheduLIT
          </div>
        </div>
        <div
          className={
            menu
              ? `${styles.navbar__right__active} ${styles.navbar__right}`
              : `${styles.navbar__right}`
          }
          ref={mobileNav}
        >
          <Link href="/events">
            <div
              className={styles.navbar__right__text}
              onClick={() => {
                if (mobileNav.current.clientWidth === 350) {
                  burgerClickHandler();
                }
              }}
            >
              Browse Events
            </div>
          </Link>
          <button
            className={`form-btn ${styles.event__add__btn}`}
            onClick={() => {
              if (currentUser) {
                route.push("/addevent");
              } else {
                route.replace("/login");
              }
              if (mobileNav.current.clientWidth === 350) {
                burgerClickHandler();
              }
            }}
          >
            Create Event
          </button>
          {currentUser ? (
            <div
              className={styles.navbar__right__text}
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              {currentUser.displayName}
            </div>
          ) : (
            <Link href="/login">
              <div
                className={styles.navbar__right__text}
                onClick={() => {
                  if (mobileNav.current.clientWidth === 350) {
                    burgerClickHandler();
                  }
                }}
              >
                Login
              </div>
            </Link>
          )}
          {currentUser && (
            <div
              className={
                dropDown
                  ? `${styles.account__dropdown__active} ${styles.account__dropdown}`
                  : `${styles.account__dropdown}`
              }
            >
              <div className={styles.dropdown__option}>Manage my events</div>
              <div className={styles.dropdown__option} onClick={logout}>
                Logout
              </div>
            </div>
          )}
        </div>
        <div className={styles.burger} onClick={burgerClickHandler}>
          <div
            className={
              menu
                ? `${styles.toggle} ${styles.burger__line1}`
                : `${styles.burger__line1}`
            }
          ></div>
          <div
            className={
              menu
                ? `${styles.toggle} ${styles.burger__line2}`
                : `${styles.burger__line2}`
            }
          ></div>
          <div
            className={
              menu
                ? `${styles.toggle} ${styles.burger__line3}`
                : `${styles.burger__line3}`
            }
          ></div>
        </div>
      </nav>
    </header>
  );
}
