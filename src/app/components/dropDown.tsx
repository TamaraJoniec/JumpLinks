'use client'
import React, { useState } from 'react'
import Links from './links';

const Dropdown = () => {
  const [sections, setSections] = useState(["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7"]);
  const [currentSection] = useState(0);
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

        <h2 className="text-2xl font-semibold">{`section ${currentSection + 1}`}</h2>
  
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
          <div className="mt-2 w-[] bg-zinc-950 ring-black text-white">
            <button
              type="button"
              className="px-4 py-2 text-white absolute right-10 top-5"
              onClick={closeDropdown}
            >Hide
            </button>
            <ul className="relative grid grid-cols-3 gap-4"  onClick={closeDropdown}>
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