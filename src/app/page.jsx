'use client';
import { useEffect, useState } from 'react';
import Sections from './components/sections';
import Dropdown from './components/dropDown';
// import DisplayLink from './components/displayLink';


export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [sections] = useState(["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7"]);


  // loop 5 times to generate a link for each section
  return (
    <div>
      <header className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40">
        <p className="text-2xl">Section above jumplinks</p>
      </header>
      <nav className="sticky top-0 flex flex-row flex-wrap  bg-zinc-950">
        <div className=" bg-zinc-950 min-w-[100vw] grid grid-rows-1 text-white">
          {/* pass the currently active section to the displaylink component */}
          {/* <DisplayLink activeSection={activeSection} setActiveSection={setActiveSection} /> */}

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
            sections.map((title, i) => {
              return (
                <Sections title={title} i={i} />
              )
            })}
        </div>
      </main>
    </div>

  )
}
