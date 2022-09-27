import React from "react";
import styles from "../../styles/Details.module.css";
import DescriptionForm from "./DescriptionForm";
import EventImageForm from "./EventImageForm";

export default function Details({ formData, setFormData, stepHandler }) {
  function submitHandler(e) {
    e.preventDefault();
    if (
      formData.userName === "" ||
      formData.email === "" ||
      formData.phone === ""
    ) {
      alert("Please fill the form correctly!");
    } else {
      stepHandler(true);
    }
  }
  return (
    <div className={styles.container}>
      <form action="#">
        <section className={styles.event__image__section}>
          <div className={styles.head__wrapper}>
            <h1>Main Event Image</h1>
            <p>
              This is the first image attendees will see at the top of your
              listing.
            </p>
          </div>
          <EventImageForm formData={formData} setFormData={setFormData} />
        </section>
        <section className={styles.event__description__section}>
          <div className={styles.head__wrapper}>
            <h1>Description</h1>
            <p>
              Add more details to your event like your schedule, sponsors, or
              featured guests.
            </p>
          </div>
          <DescriptionForm formData={formData} setFormData={setFormData} />
        </section>
        <div className={styles.btn__container}>
          <button
            type="submit"
            className="form-btn"
            // disabled={!validForm}
            onClick={submitHandler}
          >
            Next
          </button>
          <button
            className="form-btn"
            onClick={(e) => {
              e.preventDefault();
              stepHandler(false);
            }}
            style={{ backgroundColor: "#fc4f43" }}
          >
            Previous
          </button>
        </div>
      </form>
    </div>
  );
}
