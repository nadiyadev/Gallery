import React from "react";
import styles from "./ImageCard.module.css";

const getRandomSalt = () =>
  +String(Math.random() * 10000)
    .split(".")[0]
    .toString(36);

function ImageCard({ url }) {
  // const { url } = props => const url = props.url
  return (
    <div className={styles.container}>
      <img className={styles.card} src={url} loading="lazy" />
    </div>
  );
}

export { ImageCard };
