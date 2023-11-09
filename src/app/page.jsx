'use client';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('section-1');
  const sectionRefs = useRef(new Array(5).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.6 });

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  const [sections, setSections] = useState();
  const [links, setLinks] = useState();

  for (let i = 1; i <= 5; i++) {
    const id = `section-${i}`;

    sections.push(
      <section 
        ref={el => sectionRefs.current[i] = el} 
        id={id} 
        key={i} 
        className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
        <p className="text-2xl">Section {i}</p>
      </section>
    );

    links.push(
      <a 
        href={`#${id}`} 
        key={i} 
        className={currentSection === id ? "active" : ""} 
        onClick={() => scrollToSection(id)}
      >
        Section {i} 
      </a>
    );
  }
  


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
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        const link = (
          <a href={`#${id}`} key={i} className={currentSection === id ? "active" : ""} onClick={handleLinkClick}
          >Section {i} </a>
        );

        newSection.push(section);
        newLink.push(link);
      }
      setSections(newSection);
      setLinks(newLink);
    }, []);

    console.log('Current section state:', currentSection)
    console.log('Current link:', links[currentSection - 1])

    return {
      sections, links
    }

  }
  createSections();
  // loop 5 times to generate a link for each section


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <header className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40">
        <p className="text-2xl">Section above jumplinks</p>
      </header>
      {/* sticky nav bar here */}
      <nav className="sticky top-0 flex flex-row justify-between items-center min-w-[100vw] h-16 bg-zinc-950 text-white">
        {currentSection ? links[currentSection - 1] : null}
      </nav>
      {/* sections here */}
      <div key="sections">
        {sections}
      </div>
    </main>
  )
}
