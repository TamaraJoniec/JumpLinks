import { useEffect, useState } from 'react';

export default function Home() {
  const [sections, setSections] = useState([]);

  const createSections = () => {
    // create 5 sections and 5 links
    const links = [];
    useEffect(()=>{  
    const sectionElements = [];
    for (let i = 1; i <= 5; i++) {
      const id = `section-${i}`;

      const section = (
        <section id={id} key={i} className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
          <p className="text-2xl">Section {i}</p>
        </section>
      );     
       sectionElements.push(section);

    }
    setSections(sectionElements)},[]);
  
      links.push(
        <a href={`#${id}`} key={i}>Section {i} </a>
      )
    }
    // update state variables
    const [currentSection, setCurrentSection] = useState(null);
    // set up intersection observer and useEffect hook to directly manipulate the state variable
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        const visibleSection = entries.find(entry => entry.isIntersecting);
        setCurrentSection(visibleSection.target.id);
      });
      sections.forEach(section => observer.observe(section));
      return () => observer.disconnect();
    }, [sections])

    return {
      sections, links
    }

  }
  const { sections, links } = createSections();
  // loop 5 times to generate a link for each section

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <section className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40">
        <p className="text-2xl">Section above jumplinks</p>
      </section>
      {/* sticky nav bar here */}
      <nav className="sticky top-0 flex flex-row justify-between items-center min-w-[100vw] h-16 bg-zinc-950 text-white">
        {currentSection}
      </nav>
      {/* sections here */}
      <div>
        {sections}
      </div>
    </main>
  )
}
