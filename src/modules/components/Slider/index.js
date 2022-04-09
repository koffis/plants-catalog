import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";

import "./index.scss";

const Slider = () => {
  const images = useSelector(state => state.home.images);

  return (
    <div className="slider">
      <ImageGallery
        showNav={false}
        items={images}
        showThumbnails={false}
        slideInterval={4000}
        autoPlay={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
      />
    </div>
  );
};

export default Slider;
