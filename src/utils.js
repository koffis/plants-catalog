import { useState, useEffect } from "react";
export const getRem = (size) => {
  return `${size / 16}rem`;
};

export const useWindow = () => {
  const [header, setHeader] = useState(false);

  const onMobileSize = () => {
    if (window.innerWidth < 667) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onMobileSize);
    onMobileSize();
    return () => window.removeEventListener("resize", onMobileSize);
  }, []);

  return { header };
};
