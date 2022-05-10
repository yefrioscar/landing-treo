import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import ModalImage, { Lightbox } from "react-modal-image";

import project1 from "../public/assets/project-1.png";
import project2 from "../public/assets/project-2.png";
import project3 from "../public/assets/project-3.png";
import project4 from "../public/assets/project-4.png";
import project5 from "../public/assets/project-5.png";
import project6 from "../public/assets/project-6.png";
import project7 from "../public/assets/project-7.png";
import project8 from "../public/assets/project-8.png";
import project9 from "../public/assets/project-9.png";
import project10 from "../public/assets/project-10.png";
import project11 from "../public/assets/project-11.png";
import project12 from "../public/assets/project-12.png";
import { useState } from "react";

const galleryProjects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
];

const items = galleryProjects.map((item, i) => {
  return (
    <div className="pl-4 w-32 md:w-64 h-24 md:h-48" key={i}>
      <Image
        src={item}
        alt="Proyecto1"
        width={280}
        height={190}
        className="rounded-md"
        placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
});

const Gallery = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const closeLightbox = () => {
    setOpen(false);
  };

  const openLightbox = (image) => {
    setOpen(true);
    setImage(image);
  };

  return (
    <div>
      {open && (
        <Lightbox
          medium={image}
          large={image}
          alt=""
          onClose={closeLightbox}
        />
      )}
      <AliceCarousel
        autoPlayInterval={1000}
        autoPlay
        infinite
        autoWidth
        items={galleryProjects.map((item, i) => {
          return (
            <div className="pl-4 w-32 md:w-64 h-24 md:h-48" key={i}>
              <Image
                src={item}
                alt="Proyecto1"
                width={280}
                height={190}
                className="rounded-md"
                placeholder="blur" // Optional blur-up while loading
                onClick={() => openLightbox(item.src)}
              />
            </div>
          );
        })}
        disableDotsControls
        disableButtonsControls
      />
      {/* <AliceCarousel
        autoPlayInterval={1000}
        autoPlay
        infinite
        autoWidth
        items={items}
        disableDotsControls
        disableButtonsControls
      /> */}
    </div>
  );
};

export default Gallery;
