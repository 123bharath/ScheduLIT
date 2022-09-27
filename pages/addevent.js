import React, { useEffect, useRef, useState } from "react";
import BasicInfo from "../components/form/BasicInfo";
import Confirm from "../components/form/Confirm";
import Details from "../components/form/Details";
import styles from "../styles/AddEvent.module.css";

export default function AddEvent() {
  const [formData, setFormData] = useState({
    organiser: "",
    email: "",
    phone: "",
    event_title: "",
    event_type: "education",
    event_start_date: "",
    event_end_date: "",
    event_start_time: "",
    event_end_time: "",
    event_banner: null,
    event_venue: "online",
    event_price: "",
    quillValue: "",
  });
  const stepOne = useRef();
  const stepTwo = useRef();
  const stepThree = useRef();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step === 0) {
      stepOne.current.classList.add(`${styles.active}`);
      stepTwo.current.classList.remove(`${styles.active}`);
      stepThree.current.classList.remove(`${styles.active}`);
    } else if (step === 1) {
      stepOne.current.classList.add(`${styles.active}`);
      stepTwo.current.classList.add(`${styles.active}`);
      stepThree.current.classList.remove(`${styles.active}`);
    } else if (step === 2) {
      stepOne.current.classList.add(`${styles.active}`);
      stepTwo.current.classList.add(`${styles.active}`);
      stepThree.current.classList.add(`${styles.active}`);
    }
  }, [step]);
  function stepHandler(e) {
    if (e) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setStep((prevStep) => prevStep - 1);
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Create event</h1>
      <ul className={styles.progressbar}>
        <li ref={stepOne}>Basic Info</li>
        <li ref={stepTwo}>Deatils</li>
        <li ref={stepThree}>Submit</li>
      </ul>
      {step === 0 ? (
        <BasicInfo
          formData={formData}
          setFormData={setFormData}
          stepHandler={stepHandler}
        />
      ) : step === 1 ? (
        <Details
          formData={formData}
          setFormData={setFormData}
          stepHandler={stepHandler}
        />
      ) : (
        <Confirm formData={formData} stepHandler={stepHandler} />
      )}
    </div>
  );
}
