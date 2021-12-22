import React, { useState, useEffect } from "react";
import { Grid } from "../Grid/Grid";
import { ImageCard } from "../ImageCard";

const getRandomSalt = () =>
  +String(Math.random() * 10000)
    .split(".")[0]
    .toString(36);

const IMAGES_URL = "https://picsum.photos/v2/list?page=1&limit=100" + `&meow=${getRandomSalt()}`;

export function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(IMAGES_URL)
      .then((r) => r.json())
      .then((data) => setImages(data));
  }, []);

  if (images.length === 0) return <p>Loading....</p>;

  return (
    <Grid>
      {images.map(({ download_url }) => (
        <ImageCard key={download_url} url={download_url} />
      ))}
    </Grid>
  );
}
