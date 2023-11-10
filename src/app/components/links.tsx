import * as React from 'react';
export type Props = {
    title?: string;
    i?: number;
    currentSection?: number;
    color?: string;
    setCurrentSection(currentSection: number): null;
};


export default function Links({ title, i, currentSection, setCurrentSection }: Props) {
    function handleClick() {

        setCurrentSection(i || 0);
    }
    return (
        <nav className="flex flex-row p-4">
            <a
                href={`#section-${i}`}
                key={`link-${i}`}
                data-index={i}
                className={currentSection === i ? "active, sticky top-0 " : " "}
                onClick={handleClick}
            >
                {title}
            </a>
        </nav>

    )
}