
export default function Home({ title }: { title: string }) {

  // loop 5 times to generate a link for each section
  const links = [];
  for (let i=1; i <=5; i++){
    links.push(
      <a href={`#section-${i}`} key={i}>Section {i} </a>
    )
  }
  const createSections = () => {
    let sections = [];
    for (let i = 1; i <= 5; i++) {
      sections.push(
        <section id={`"section-${i}"`} key={i} className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
          <p className="text-2xl">Section {i}</p>
        </section>
      )
    } 
    return sections;
  }      
  const sections = createSections();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <section className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40">
        <p className="text-2xl">Section above jumplinks</p>
      </section>
      {/* sticky nav bar here */}

      <nav className="sticky top-0 flex flex-row justify-between items-center min-w-[100vw] h-16 bg-zinc-950 text-white">
        <div className="flex flex-row justify-between items-center">
          {links}
          {/* drop down navigation bar */}

        </div>
      </nav>
      {/* sections here */}
      <div>
        {sections}
      </div>
    
    </main>
  )
}
