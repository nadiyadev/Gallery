import React from "react";
import styles from './ImageCard.module.css'
function ImageCard({ url }) {
  // const { url } = props => const url = props.url
  return <img className={styles.card} src={url} />;
}

export { ImageCard };
