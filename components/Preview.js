import React from "react";
import styles from "../styles/EventDetail.module.css";
export default function Preview({ formData }) {
  function createMarkup() {
    return { __html: formData.quillValue };
  }
  return (
    <div className={styles.container}>
      <h1>Preview of your event</h1>
      <div className={styles.hero}>
        <img
          src={URL.createObjectURL(formData.event_banner)}
          alt=""
          className={styles.hero__img}
        />
      </div>
      <main className={styles.event__detail__container}>
        <div className={styles.event__detail__left}>
          <div className={styles.left__inner}>
            <div className={styles.start__date}>
              {formData.event_start_time}
            </div>
            <h1 className={styles.event__title}>{formData.event_title}</h1>
            <div className={styles.organiser__info}>
              <div className={styles.organiser__name}>{formData.organiser}</div>
              <abbr title="email address">
                <span className={styles.email}>Email:</span>
                <a href={`mailto: ${formData.email}`}>{formData.email}</a>
              </abbr>
              <abbr title="phone number">
                <span className={styles.phone}>Phone:</span>
                <a href={`tel:+91${formData.phone}`}>{formData.phone}</a>
              </abbr>
            </div>
          </div>
          <div className={styles.address__container}>
            <h2 className={styles.address__head}>When and Where</h2>
            <div className={styles.address__inner}>
              <div className={styles.date__time}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#3d64ff"
                  className={styles.icon}
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18 h-2v-2h2V18z" />
                  </g>
                </svg>
                <div className={styles.address__text__div}>
                  <h3>Date and Time</h3>
                  <p>{formData.event_start_date}</p>
                </div>
              </div>
              <div className={styles.location}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#3d64ff"
                  className={styles.icon}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className={styles.address__text__div}>
                  <h3>Location</h3>
                  <p>{formData.event_venue}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.event__details}>
            <h2>About this event</h2>
            <div
              className={styles.quill__content__container}
              dangerouslySetInnerHTML={createMarkup()}
            />
          </div>
        </div>
        <div className={styles.event__details__right}>
          <div className={styles.event__register__container}>
            <div className={styles.event__price__type}>Free</div>
            <button className="form-btn">Register</button>
          </div>
        </div>
      </main>
    </div>
  );
}
