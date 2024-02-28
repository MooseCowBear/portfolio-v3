import { useState } from "react";
import { CarouselButton } from "./CarouselButton";
import { getImages } from "../utils/carousel";
import "../styles/carousel.css";
import { useModeContext } from "../contexts/ModeContext";

type CarouselProps = {
  project: Project;
};

export function Carousel({ project }: CarouselProps) {
  const { dark } = useModeContext();
  const [position, setPosition] = useState(0);
  const emptyImages: Image[] = [];
  const images = getImages(project, dark) || emptyImages;
  const positions = [...Array(images.length).keys()];
  const image = images[position];

  if (!image) return <div></div>; // ensures card has two columns, shouldn't ever be here

  return (
    <div className="carousel">
      <div className="frame">
        <div className="mockup">
          <div className="mockup__header">
            <div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </div>
          <img src={image.src} title={image.title} alt={image.description} />
        </div>
      </div>
      {positions.length > 1 && (
        <div className="buttons-container">
          {positions.map((pos) => {
            return (
              <CarouselButton
                key={pos}
                position={position}
                number={pos}
                handler={setPosition}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
