import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

function ResCard({ title, image, location, date, time, id }) {
  const router = useRouter();
  return (
    <div
      className={styles.result__card}
      onClick={() => {
        router.push(`/events/${id}`);
      }}
    >
      <div className={styles.content}>
        <div className={styles.event__title}>{title}</div>
        <div className={styles.event__time}>{`${date}${time}`}</div>
        <div className={styles.event__location}>{location}</div>
      </div>
      <div className={styles.image__container}>
        <img src={image} alt="event image" className={styles.img} />
      </div>
    </div>
  );
}

export default function SearchBar({ data }) {
  const [input, setInput] = useState("");
  function inputHandler(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <section className={styles.search__container}>
        <div className={styles.wrap}>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Select an event"
            value={input}
            onChange={inputHandler}
          />
          <div
            className={styles.result__container}
            style={input === "" ? { padding: "0" } : { padding: "1rem" }}
          >
            {data &&
              data
                .filter((val) => {
                  if (input === "") {
                    return;
                  } else if (
                    val.data.event_title
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => (
                  <ResCard
                    title={item.data.event_title}
                    image={item.data.event_banner}
                    location={item.data.event_venue}
                    time={item.data.event_start_time}
                    date={item.data.event_start_date}
                    key={item.id}
                    id={item.id}
                  />
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
