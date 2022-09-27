import React, { useRef, useState } from "react";
import styles from "../../styles/BasicInfoForm.module.css";

export default function BasicInfoForm({ formData, setFormData }) {
  const [validForm, setValidForm] = useState(false);
  const regexRef = useRef({
    organiser: /^([\w]{3,})+(\s+([\w\s]{1,})+)?$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^\d{10}$/,
  });
  function inputHandler(e) {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
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

  return (
    <div className={styles.container}>
      <div className={styles.event__title__div}>
        <label htmlFor="event_title">
          <span>Event title</span>
          <span className="field--required">&#42;</span>
        </label>
        <input
          type="text"
          id="event_title"
          value={formData.event_title}
          onChange={inputHandler}
          required
          placeholder="Be clear and descriptive."
        />
        <p className="validation__info">
          Title is required, Event title must contain atleast 3 characters
        </p>
      </div>
      <div className={styles.organiser__div}>
        <label htmlFor="organiser">
          <span>Organiser</span> <span className="field--required">&#42;</span>
        </label>
        <input
          type="text"
          id="organiser"
          value={formData.organiser}
          onChange={inputHandler}
          onKeyUp={keyUpHandler}
          placeholder="Tell attendees who is organising this event"
          required
        />
        <p className="validation__info">
          Name must contain atleast 3 characters
        </p>
      </div>
      <div className={styles.event__type__div}>
        <label htmlFor="event_type">
          <span>Event type</span>
          <span className="field--required">&#42;</span>
        </label>
        <select
          name="event_type"
          id="event_type"
          className={styles.event__select}
          required
          value={formData.event_type}
          onChange={inputHandler}
        >
          <option value="education">Education</option>
          <option value="sports">Sports</option>
          <option value="cultural">Cultural</option>
          <option value="charity">Charity</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={styles.email__ph__container}>
        <div className={styles.email__div}>
          <label htmlFor="email">
            Email <span className="field--required">&#42;</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email id"
            required
            value={formData.email}
            onChange={inputHandler}
            onKeyUp={keyUpHandler}
          />
          <p className="validation__info">Email must be valid address</p>
        </div>
        <div className={styles.phone__div}>
          <label htmlFor="phone">
            Phone number <span className="field--required">&#42;</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone number"
            required
            value={formData.phone}
            onChange={inputHandler}
            onKeyUp={keyUpHandler}
          />
          <p className="validation__info">
            Phone must be valid India phone number
          </p>
        </div>
      </div>
    </div>
  );
}
