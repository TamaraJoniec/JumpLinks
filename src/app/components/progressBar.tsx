"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progressMainWrapper bg-black h-[15] m-0 sticky bottom-0 left-[0] z-1 w-[100vw] min-w-[100vw]">
      <div
        className="progressMainStyle h-[5px] bg-blue-300 w-[15vw]"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
}
