'use client';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [sections, setSections] = useState([]);
  const [links, setLinks] = useState([]);

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

        const link = (
          <a href={`#${id}`} key={i}>Section {i} </a>
        );

        newSection.push(section);
        newLink.push(link);
      }
      setSections(newSection);
      setLinks(newLink);
    }, []);

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
        {setLinks}
      </nav>
      {/* sections here */}
      <div>
        {sections}
      </div>
    </main>
  )
}
