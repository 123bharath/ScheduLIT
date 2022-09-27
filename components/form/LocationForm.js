import React, { useState } from "react";
import styles from "../../styles/LocationForm.module.css";

const RADIO = {
  VENUE: "venue",
  ONLINE: "online",
  ANNOUNCED: "announced",
};

export default function LocationForm({ formData, setFormData }) {
  const [locationType, setLoactionType] = useState({ loaction: "" });
  function changeHandler(e) {
    if (e.target.checked) {
      setLoactionType(e.target.value);
      setFormData((prevData) => ({ ...prevData, event_venue: e.target.value }));
    }
  }
  function inputHandler(e) {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  }
  return (
    <div className={styles.container}>
      <div className={styles.radio__container}>
        <div className={styles.radio__div}>
          <label
            htmlFor="venue"
            className={
              locationType === RADIO.VENUE
                ? `${styles.radio__label} ${styles.radio__active}`
                : `${styles.radio__label}`
            }
          >
            Venue
          </label>
          <input
            type="radio"
            id="venue"
            name="location"
            value={"venue"}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.radio__div}>
          <label
            htmlFor="online"
            className={
              locationType === RADIO.ONLINE
                ? `${styles.radio__label} ${styles.radio__active}`
                : `${styles.radio__label}`
            }
          >
            Online event
          </label>
          <input
            type="radio"
            id="online"
            name="location"
            value={"online"}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.radio__div}>
          <label
            htmlFor="announced"
            className={
              locationType === RADIO.ANNOUNCED
                ? `${styles.radio__label} ${styles.radio__active}`
                : `${styles.radio__label}`
            }
          >
            To be announced
          </label>
          <input
            type="radio"
            id="announced"
            name="location"
            value={"announced"}
            onChange={changeHandler}
          />
        </div>
      </div>
      {locationType === RADIO.VENUE && (
        <div className={styles.event__venue__div}>
          <label htmlFor="event_venue">
            <span>Event venue</span>
            <span className="field--required">&#42;</span>
          </label>
          <textarea
            name="event_venue"
            id="event_venue"
            cols="30"
            rows="2"
            className={styles.textarea}
            value={formData.event_venue}
            onChange={inputHandler}
            required
          ></textarea>
        </div>
      )}
    </div>
  );
}
