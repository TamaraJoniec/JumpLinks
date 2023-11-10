'use client'
import React, { useState } from 'react'
import Links from './links';

const Dropdown = () => {
  const [sections, setSections] = useState(["Section one", "Section two", "Section three", "Section four", "Section five", "Section six", "Section seven"]);
  const [currentSection] = useState(
    // pass in the mutable reference to the section that is being scrolled over
    // this will be used to determine which section is active


  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-2 bg-zinc-950  text-white">
      <div className='py-6 pb-8'>
        {/* make this p tag a link to the section that is being scrolled over */}

        <h2 className="text-2xl font-semibold">{`section ${currentSection }`} fix this </h2>
  
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
      {
        isOpen && (
          <div className="ml-40 mb-10 bg-zinc-950 ring-black text-white grid gap-4 grid-cols-1 grid-rows-1">
            <button
              type="button"
              className="py-5 px-10 text-white absolute right-10 top-5"
              onClick={closeDropdown}
            >Hide
            </button>
            <ul className="relative grid grid-cols-3 gap-10"  onClick={closeDropdown}>
              {
                sections.map((title, i) => {
                  return (
                    <Links title={title} i={i} currentSection={currentSection} />
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