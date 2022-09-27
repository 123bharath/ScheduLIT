import React from "react";
import styles from "../../styles/BasicInfo.module.css";
import BasicInfoForm from "./BasicInfoForm";
import DateTimeForm from "./DateTimeForm";
import LocationForm from "./LocationForm";

export default function BasicInfo({ formData, setFormData, stepHandler }) {
  function submitHandler(e) {
    e.preventDefault();
    if (
      formData.userName === "" ||
      formData.email === "" ||
      formData.phone === ""
    ) {
      alert("Please fill the form correctly!");
    } else {
      console.log(formData);
      stepHandler(true);
    }
  }
  return (
    <div className={styles.container}>
      <form action="">
        <section className={styles.basic__info__section}>
          <div className={styles.head__wrapper}>
            <h1>Basic Info</h1>
            <p>
              Name your event and tell event-goers why they should come. Add
              details that highlight what makes it unique.
            </p>
          </div>
          <BasicInfoForm formData={formData} setFormData={setFormData} />
        </section>
        <section className={styles.location__section}>
          <div className={styles.head__wrapper}>
            <h1>Location</h1>
            <p>
              Help people in the area discover your event and let attendees know
              where to show up.
            </p>
          </div>
          <LocationForm formData={formData} setFormData={setFormData} />
        </section>
        <section className={styles.dateTime__section}>
          <div className={styles.head__wrapper}>
            <h1>Date and Time</h1>
            <p>
              Tell event-goers when your event starts and ends so they can make
              plans to attend.
            </p>
          </div>
          <DateTimeForm formData={formData} setFormData={setFormData} />
        </section>
        <button className="form-btn" onClick={submitHandler} type="submit">
          Next step
        </button>
      </form>
    </div>
  );
}
