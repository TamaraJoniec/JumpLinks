import Link from 'next/link'

export default function Home({ title }: { title: string }) {

  const createSections = () => {
    let sections = [];
    for (let i = 1; i <= 5; i++) {
      sections.push(
        <section id={`"section-${i}"`} key={i} className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
          <p className="text-2xl">{title} {i}</p>
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
          <Link href="#Section-1">{title}</Link>
          <Link href="#Section-2">{title}</Link>
          <Link href="#Section-3">{title}</Link>
          <Link href="#Section-4">{title}</Link>
          <Link href="#Section-5">{title}</Link>
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
