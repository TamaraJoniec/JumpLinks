

import React, { useState, useRef } from 'react'
import Links from './links';

export type Props = {
    title?: string;
    i?: number;
    currentSection?: number;
};

export default function DisplayLink({ currentSection }: Props) {

    const [sections] = useState(["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7"]);
    // const [hoveredSection, setHoveredSection] = useState(null);
    const sectionRefs = useRef(new Array(7).fill(null));

    //  if the current section is hovered, set the hovered section to the current link and hide the other links
    if (
        // scrolling over current section
        currentSection === 0 || currentSection === 1 
        // scrolling over next section
        || currentSection === 2 || currentSection === 3
        // scrolling over previous section
        || currentSection === 4 || currentSection === 5
        // scrolling over previous section
        || currentSection === 6 || currentSection === 7
    ) 
        return (
            <div className="mt-2 w-[] bg-zinc-950 ring-black text-white">
                <ul className="grid grid-cols-3 gap-4">
                    {
                        sections.map((title, i) => {
                            return (
                                <Links title={title} i={i} currentSection={currentSection} color={"text-white"} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }