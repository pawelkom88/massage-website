import { useEffect, useState } from "react";

export const useWindowSize = (value:number) => {
  const [isElementVisible, setIsElementVisible] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  function setScrollValue() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    (function watchScroll() {
      window.addEventListener("scroll", setScrollValue);
    })();

    return () => window.removeEventListener("scroll", setScrollValue);
  });

  useEffect(() => {
    const pageHeight: HTMLBodyElement = document.getElementsByTagName("body")[0];

    const hasPassedSetPoint: boolean =
      window.innerHeight + window.scrollY >= pageHeight.clientHeight * value;

    hasPassedSetPoint ? setIsElementVisible(true) : setIsElementVisible(false);
  }, [scrollY, value]);

  return isElementVisible;
};
