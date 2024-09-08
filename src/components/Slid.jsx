import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://historyofvadodara.in/wp-content/uploads/Central-Library.jpg",
    caption: "Baroda Central Library",
  },
  {
    url: "https://lh6.googleusercontent.com/proxy/pn9xMoqEI8FOpRnWv9dQDi1ldc2aw3EzFavMDyGdMOlLzd8Z3s2K8OfRvNLkw51NfKRsvkoSWHRq-PP1_nIuDLHPnntCBsIhGTuY0h-7mDWh",
    caption: "Gandhinagar Central Library",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Government_Taluka_Library_of_Khedbrahma_Gujarat.jpg",
    caption: "Gujarat Government Library",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="slide">
            <img
              className="slidimage"
              style={{ width: "100%" }}
              src={fadeImage.url}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;