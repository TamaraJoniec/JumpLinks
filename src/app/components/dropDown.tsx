"use client";

import React, { useState } from "react";
import Links from "./links";
import ProgressBar from "./progressBar";

export type Props = {
  currentSection: string;
  sections: { title: string; description: string }[];
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
    <nav className="mt-2 bg-zinc-950  text-white" role="navigation">
      <div className="flex items-center p-4 md:py-6 md:p-8">
        <h2 className="text-lg md:text-2xl font-semibold md:px-10">
          {currentSection}
        </h2>
        {!isOpen && (
          <button
            type="button"
            className="text-white absolute right-10 top-5 md:m-4"
            onClick={toggleDropdown}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
      <ProgressBar aria-label="Loading progress" />
      {isOpen && (
        <div className="flex items-center p-4 md:py-6 md:pb-8">
          <button
            type="button"
            className="text-white absolute right-10 top-5 md:m-4"
            onClick={closeDropdown}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.225 4.811a1 1 0 10-1.414 1.414L10.586 12l-5.775 5.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 101.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.811z" />
            </svg>
          </button>
          <ul
            className="relative md:grid md:grid-cols-3 gap-10 w-full"
            onClick={closeDropdown}
          >
            {sections?.map((section, i) => {
              return (
                <Links
                  key={i}
                  title={section.title}
                  i={i}
                  setCurrentSection={setCurrentSection}
                  currentSection={currentSection}
                />
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Dropdown;
