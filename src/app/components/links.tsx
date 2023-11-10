import * as React from 'react';
export type Props = {
    title?: string;
    i?: number;
    currentSection?: string;
    color?: string;
    setCurrentSection(currentSection: string): null;
};


export default function Links({ title, i, currentSection, setCurrentSection }: Props) {
    function handleClick() {

        setCurrentSection(title || 'Places To Visit In Leeds');
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