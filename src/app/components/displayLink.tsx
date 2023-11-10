

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
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef(new Array(7).fill(null));

    return (
        <div>
            {sections.map((section, index) => (
                currentSection === index && (
                    <Links
                        title={section}
                        i={index}
                        currentSection={currentSection}
                        key={index}
                    />
                )
            ))}
        </div>
    );
}