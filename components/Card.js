import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Card.module.css";
export default function Card({ title, img, date, time, closed, featured, id }) {
  const router = useRouter();
  return (
    <article
      className={
        featured === 0 ? `${styles.card} ${styles.featured}` : styles.card
      }
      onClick={() => {
        router.push(`/events/${id}`);
      }}
    >
      {closed ? (
        <div className={styles.ribbon}>
          <div className={styles.closed}>CLOSED</div>
        </div>
      ) : null}
      <img src={img} alt="img" className={styles.card__img} />
      <div className={styles.card__content}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__time__wrapper}>
          <div className={styles.date__container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18 h-2v-2h2V18z" />
              </g>
            </svg>
            <div className={styles.date}>{date}</div>
          </div>
          <div className={styles.time__container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            <div className={styles.time}>{time}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
