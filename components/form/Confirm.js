import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { db, storage } from "../../firebase/firebase";
import Spinner from "../../loaders/Spinner";
import Preview from "../Preview";
import styles from "../../styles/Confirm.module.css";
import { useRouter } from "next/router";

export default function Confirm({ formData, stepHandler }) {
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  async function uploadImage(data) {
    const imgRef = ref(
      storage,
      `eventImage/${Math.floor(Math.random() * 1000)}${data.event_banner.name}`
    );
    const formDbRef = doc(collection(db, "events"));
    try {
      setLoading(true);
      await uploadBytes(imgRef, data.event_banner);
      const url = await getDownloadURL(imgRef);
      console.log("storage success");
      await setDoc(formDbRef, {
        ...formData,
        event_banner: `${url}`,
        timestamp: serverTimestamp(),
      });
      console.log("db uploaded");
      route.replace("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function submitHandler() {
    uploadImage(formData)
      .then((res) => {
        console.log(res, "completed");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (loading) {
    return <Spinner message={"Please wait..."} />;
  }
  return (
    <div className={styles.container}>
      <Preview formData={formData} />
      <div className={styles.btn__container}>
        <button
          type="submit"
          className="form-btn"
          // disabled={!validForm}
          onClick={submitHandler}
        >
          Submit
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
    </div>
  );
}
