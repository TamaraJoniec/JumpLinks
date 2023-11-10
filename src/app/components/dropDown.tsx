'use client'
import React, { useState } from 'react'
import Links from './links';

const Dropdown = () => {
  const [currentSection] = useState(0);
  const [sections, setSections] = useState(["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7"]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className='py-6 pb-8'>
      <div>
        <button
          type="button"
          className="px-4 py-2 text-white absolute right-10 top-0"
          onClick={toggleDropdown}
        >
          Show
        </button>    
        </div>
        {isOpen && (
          <div className="mt-2 w-[] bg-zinc-950 ring-black text-white">
            <ul className="grid grid-cols-3 gap-4">
            {
            sections.map((title, i) => {
              return (
                <Links title={title} i={i} currentSection={currentSection} />
              )
            })}
            </ul>
          </div>
        )}
  
    </div>
  )
}

export default Dropdown;