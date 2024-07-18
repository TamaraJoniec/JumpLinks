"use client";
import cityLights from "public/assets/city-lights.jpg";

import { useEffect, useState } from "react";
import Image from "next/image";

import Sections from "./components/sections";
import Dropdown from "./components/dropDown";
import Data from "./data.json";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(
    "Places To Visit In Leeds"
  );
  const [sections] = useState([...Data.sections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const topEntry = entries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );
        if (topEntry.isIntersecting) {
          if (topEntry.target.dataset.title) {
            setCurrentSection(topEntry.target.dataset.title);
          }
        }
      },
      { threshold: [0.1] }
    );
    document.querySelectorAll("section").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <div>
      <header className="relative min-h-[75vh] min-w-[100vw] overflow-hidden">
        <picture className="absolute z-[-1] w-full h-full object-cover">
          <Image
            src={cityLights}
            alt="Leeds City Lights"
            layout="fill"
            objectFit="cover"
          />
        </picture>
      </header>
      <nav className="sticky z-50 top-0 flex flex-row flex-wrap bg-zinc-950" role="navigation">
        <div className=" bg-zinc-950 min-w-[100vw] grid grid-rows-1 text-white">
          <Dropdown
            className="sticky right-0"
            setCurrentSection={setCurrentSection}
            sections={sections}
            currentSection={currentSection}
          ></Dropdown>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between" role="main">
        <div key="sections">
          {sections &&
            sections.map((section, i) => {
              return <Sections section={section} i={i} key={i} />;
            })}
        </div>
      </main>
      <footer className="bg-black h-[10vh] text-center flex flex-row justify-center items-center text-white" role="footer">
        Made with ❤️ by Tamara
      </footer>
    </div>
  );
}
