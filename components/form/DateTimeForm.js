import React from "react";
import styles from "../../styles/DateTimeForm.module.css";

export default function DateTimeForm({ formData, setFormData }) {
  function inputHandler(e) {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  }
  return (
    <div className={styles.container}>
      <p>Single event happens once and can last multiple days</p>
      <div className={styles.event__start__conatiner}>
        <div className={styles.event__date__div}>
          <label htmlFor="event_start_date">
            <span>Event starts</span>{" "}
            <span className="field--required">&#42;</span>
          </label>
          <input
            type="date"
            id="event_start_date"
            value={formData.event_start_date}
            onChange={inputHandler}
          />
        </div>
        <div className={styles.event__time__div}>
          <label htmlFor="event_start_time">Start time</label>
          <input
            type="time"
            id="event_start_time"
            value={formData.event_start_time}
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className={styles.event__end__conatiner}>
        <div className={styles.event__date__div}>
          <label htmlFor="event_end_date">
            <span>Event ends</span>{" "}
            <span className="field--required">&#42;</span>
          </label>
          <input
            type="date"
            id="event_end_date"
            value={formData.event_end_date}
            onChange={inputHandler}
          />
        </div>
        <div className={styles.event__time__div}>
          <label htmlFor="event_end_time">End time</label>
          <input
            type="time"
            id="event_end_time"
            value={formData.event_end_time}
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className={styles.checkbox__container}>
        <div className={styles.checkbox__div}>
          <input type="checkbox" id="display_start" />
          <label htmlFor="display_start">
            <p>Display start time.</p>
            <p>The start time of your event will be displayed to attendees.</p>
          </label>
        </div>
        <div className={styles.checkbox__div}>
          <input type="checkbox" id="display_end" />
          <label htmlFor="display_end">
            <p>Display end time.</p>
            <p>The end time of your event will be displayed to attendees.</p>
          </label>
        </div>
      </div>
    </div>
  );
}
