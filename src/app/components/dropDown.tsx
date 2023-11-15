'use client'
import React, { useState } from 'react'
import Links from './links';
import ProgressBar from './progressBar';


export type Props = {
  currentSection: string;
  sections: {title: string, description: string}[];
  setCurrentSection(currentSection: string): null;

};

const Dropdown = ({ setCurrentSection, sections, currentSection }: Props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div className="mt-2 bg-zinc-950  text-white">
      <div className='py-6 pb-8 grid grid-rows-1'>
        <h2 className="text-2xl font-semibold px-10">{currentSection}</h2>
        {!isOpen && (
          <button
            type="button"
            className="px-4 py-2 text-white absolute right-10 top-5"
            onClick={toggleDropdown}
          >
            Show
          </button>
        )}
      </div>
      <ProgressBar />
      {
        isOpen && (
          <div className="ml-40 mb-10 bg-zinc-950 ring-black text-white grid gap-4 grid-cols-1 grid-rows-1">
            <button
              type="button"
              className="py-5 px-10 text-white absolute right-10 top-5"
              onClick={closeDropdown}
            >Hide
            </button>
            <ul className="relative grid grid-cols-3 gap-10 pt-10"  onClick={closeDropdown}>
              {
                sections?.map((section, i) => {
                  return (
                    <Links key={i} title={section.title} i={i} setCurrentSection={setCurrentSection} currentSection={currentSection} />
                  )
                })}
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Dropdown;