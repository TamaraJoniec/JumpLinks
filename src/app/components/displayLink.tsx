// import Links, { Props } from "./links"; 
// import React, { useState } from 'react'
// export default function DisplayLink() {
//     const [hoveredSection, setHoveredSection] = useState(null);
//     const [sections, setSections] = useState(["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7"]);
//     const [currentSection, setCurrentSection] = useState(0);

//    sections.map((title, i) => {
//   const id = `section-${i+1}`;
//   return (
//     <Links 
//       className="sticky top-0" 
//       title={title} 
//       i={i} 
//       currentSection={currentSection} 
//       onMouseEnter={() => setHoveredSection(title)}
//       onMouseLeave={() => setHoveredSection(null)}
//     >
//       {hoveredSection === title && title}
//     </Links>
//   )
// })
// }