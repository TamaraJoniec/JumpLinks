'use client'
import React, { useState } from 'react'
import Links from './links';

const Dropdown = () => {
  const currentSection = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative py-6 pb-8'>
      <div className="fixed top-0 right-0 right-0">
        <button
          type="button"
          className="px-4 py-2 text-white"
          onClick={toggleDropdown}
        >
          Show
        </button>    
        </div>
        {isOpen && (
          <div className="flex flex-row right-0 mt-2 w-[] bg-zinc-950 ring-black text-white">
            <ul >
              <li>
                <slot>
                  <Links title="Section 1" i={1} currentSection={1}/>
                </slot>
              </li>
              <li>
                <slot>
                  <Links title="Section 2" i={1} currentSection={2} />
                </slot>
              </li>
              <li>
                <slot>
                  <Links title="Section 3" i={1} currentSection={3}/>
                </slot>
              </li>
              <li>
                <slot>
                  <Links title="Section 4" i={1} currentSection={4}/>
                </slot>
              </li>
              <li>
                <slot>
                  <Links title="Section 5" i={1} currentSection={5}/>
                </slot>
              </li>
            </ul>
          </div>
        )}
  
    </div>
  )
}

export default Dropdown;