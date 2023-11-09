
export default function Home() {

  const createSections = () => {
    let sections = [];
    const links = [];
    for (let i = 1; i <= 5; i++) {
      const id = `section-${i}`;

      sections.push(
        <section id={id} key={i} className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
          <p className="text-2xl">Section {i}</p>
        </section>
      )
      links.push(
        <a href={`#${id}`} key={i}>Section {i} </a>
      )
    }
  
  const observer = new IntersectionObserver(entries => {
    const visibleSection = entries.find(entry => entry.isIntersecting);
    if(visibleSection){
      currentSection = visibleSection.target.id;
      updateNav();
    }
  });
    return {
      sections, links
    }

  }
  const { sections, links } = createSections();
  // loop 5 times to generate a link for each section

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <section className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40">
        <p className="text-2xl">Section above jumplinks</p>
      </section>
      {/* sticky nav bar here */}
      <nav className="sticky top-0 flex flex-row justify-between items-center min-w-[100vw] h-16 bg-zinc-950 text-white">
        {currentSection}
      </nav>
      {/* sections here */}
      <div>
        {sections}
      </div>
    </main>
  )
}
