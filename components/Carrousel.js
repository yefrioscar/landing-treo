import React, { useState, useEffect, useCallback } from "react";
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../utils/media";
import media2 from "../utils/media/media-1.jpeg";

const Carrousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, speed: 1000 });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative mx-auto">
      <div className="overflow-hidden rounded-md w-full" ref={viewportRef}>
        <div className="flex -ml-3 select-auto">
          {slides.map((index) => (
            <div className="relative min-w-full w-28 pl-3" key={index}>
              <div className="relative overflow-hidden h-52 md:h-72 rounded-md">
                <img
                  className="absolute block top-1/2 left-1/2 w-auto min-h-full min-w-full max-w-none -translate-x-1/2 -translate-y-1/2"
                  src={mediaByIndex(index)}
                  alt="A cool cat."
                />
              </div>
              <div className="absolute top-0 left-0 ml-3 bg-gradient-to-r from-black w-full h-full p-4 flex items-center">
                <p className="text-white font-bold text-4xl">
                 MOVIMIENTO DE TIERRA <br></br> OBRAS CIVILES <br></br> EXPLOTACIÓN DE MINAS Y CANTERAS <br></br> ALCANTARILLADO Y SANEAMIENTO
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  );
};

export default Carrousel;
