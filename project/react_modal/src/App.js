import React, { useState } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";


const images = [
  { title: "Kitten 1", caption: "Caption 1", url: img1 },
  { title: "Kitten 2", caption: "Caption 2", url: img2 },
  { title: "Kitten 3", caption: "Caption 3", url: img3 },
  { title: "Kitten 4", caption: "Caption 4", url: img4 }
];
 
function App() {
 
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
 
  return (
    <div className="app">
      <h3>Modal popup with an image in React - <a href="https://www.cluemediator.com" target="_blank" rel="noreferrer noopener">Clue Mediator</a></h3>
 
      <button onClick={() => setIsOpen(true)}>Preview Images</button>
      {isOpen && <Lightbox
        imageTitle={images[imgIndex].title}
        imageCaption={images[imgIndex].caption}
        mainSrc={images[imgIndex].url}
        nextSrc={images[(imgIndex + 1) % images.length].url}
        prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
      />}
    </div>
  );
}
 
export default App;