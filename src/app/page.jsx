'use client';
import { useEffect, useState } from 'react';
import Sections from './components/sections';
import Dropdown from './components/dropDown';
import Data from "./data.json"
export default function Home() {
  const [currentSection, setCurrentSection] = useState('Places To Visit In Leeds');
  const [sections] = useState([...Data.sections]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const topEntry = entries.reduce((prev, current) =>
        (prev.intersectionRatio > current.intersectionRatio) ? prev : current
      );

      if (topEntry.isIntersecting) {
        if (topEntry.target.dataset.title) {
          setCurrentSection(topEntry.target.dataset.title);
        }
      }
    }, { threshold: [0.1] });

    document.querySelectorAll('section').forEach(element => {
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <header className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40  bg-auto bg-no-repeat bg-center" style={{ backgroundImage: `url('https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/Yorkshire/Leeds/Leeds-lights-roads-Getty.jpg')`, }}>
      </header>
      <nav className="sticky z-50 top-0 flex flex-row flex-wrap  bg-zinc-950">
        <div className=" bg-zinc-950 min-w-[100vw] grid grid-rows-1 text-white">
          <Dropdown className="sticky right-0"
            setCurrentSection={setCurrentSection}
            sections={sections}
            currentSection={currentSection} >
          </Dropdown>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-10">

        <div key="sections">
          {sections &&
            sections.map((section, i) => {
              return (
                <Sections section={section} i={i} key={i} />
              )
            })}
        </div>
      </main>
    </div>

  )
}
