import * as React from 'react';

export type Props = {
    title?: string;
    i?: number;
    currentSection?: number;
};


export default function Links({ title, i, currentSection }: Props) {

    return (
        <nav className="flex flex-row p-4">
            <a
                href={`#section-${i}`}
                key={i}
                className={currentSection === i ? "active, sticky top-0 " : " "}
            >
                {title}
            </a>
        </nav>

    )
}