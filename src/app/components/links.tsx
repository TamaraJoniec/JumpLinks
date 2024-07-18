import * as React from "react";

export type Props = {
  title?: string;
  i?: number;
  currentSection?: string;
  color?: string;
  setCurrentSection(currentSection: string): null;
};

export default function Links({
  title,
  i,
  currentSection,
  setCurrentSection,
}: Props) {
  function handleClick() {
    setCurrentSection(title || "Places To Visit In Leeds");
  }

  return (
    <nav className="flex flex-row justifyaround p-4 md:px-4 md:ml-8" role="navigation">
      <a
        href={`#section-${i}`}
        key={`link-${i}`}
        data-index={i}
        className={currentSection === i ? "active, sticky top-0 " : " "}
        onClick={handleClick}
        role="link"
        aria-current={currentSection === i ? "page" : undefined}
      >
        <h3>{title}</h3>
      </a>
    </nav>
  );
}
