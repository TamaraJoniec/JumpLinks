'use client';
import { useEffect, useState } from 'react';
import Sections from './components/sections';
import Dropdown from './components/dropDown';
// import DisplayLink from './components/displayLink';
export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [sections] = useState(["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7"]);
  const [activeSection, setActiveSection] = useState(0);

  const createSections = () => {
    // create 5 sections and 5 links

    useEffect(() => {

      let newSection = [];
      let newLink = [];

      for (let i = 1; i <= 5; i++) {
        const id = `section-${i}`;

        const section = (
          <section id={id} key={i} className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
            <p className="text-2xl">Section {i}</p>
          </section>
        );
        const handleLinkClick = () => {
          setCurrentSection(id);
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        const link = (
          <a href={`#${id}`} key={i} className={currentSection === id ? "active" : ""} onClick={handleLinkClick}
          >Section {i} </a>
        );

        newSection.push(section);
        newLink.push(link);
      }
    }, []);
  }

  createSections();

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // loop 5 times to generate a link for each section
  return (
    <div>
      <header className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40">
        <p className="text-2xl">Section above jumplinks</p>
      </header>
      <nav className="sticky top-0 flex flex-row flex-wrap px-10  bg-zinc-950">
        <div className=" bg-zinc-950 flex min-w-[100vw] text-white">
          {/* pass the currently active section to the displaylink component */}
          {/* <DisplayLink activeSection={activeSection} setActiveSection={setActiveSection} /> */}
          <Dropdown className="top-0 right-0">
          </Dropdown>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        {/* sections here */}
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
