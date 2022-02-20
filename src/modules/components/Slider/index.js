import ImageGallery from "react-image-gallery";

import "./index.scss";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Slider = () => {
  return (
    <div className="slider">
      <ImageGallery
        showNav={false}
        items={images}
        showThumbnails={false}
        slideInterval={3000}
        autoPlay={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
      />
    </div>
  );
};

export default Slider;
