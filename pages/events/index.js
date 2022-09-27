import React from "react";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import { useFirestoreContext } from "../../context/FirestoreContext";
import Spinner from "../../loaders/Spinner";
import styles from "../../styles/Home.module.css";

export default function Index() {
  const { data, loading } = useFirestoreContext();
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <SearchBar />
      <section className={styles.ongoing__event__container}>
        <div className={styles.ongoing__event__head}>All events</div>
        <div className={styles.events__grid}>
          {data?.map((item) => (
            <Card
              title={item.data.event_title}
              date={item.data.event_start_date}
              time={item.data.event_start_time}
              img={item.data.event_banner}
              closed={item.event_closed}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
