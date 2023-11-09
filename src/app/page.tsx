import Link from 'next/link'
import Script from 'next/script'
import Sections from './components/sections'

type Props = {
  title: string;
  i?: number;
};

export default function Home({ title, i }: Props) {

  const createSection = ({ title, i }: Props) => {
    for (let i = 0; i < 5; i++) {
      <section id={`"section ${i}"`} className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
        <p className="text-2xl">{title}{i}</p>
      </section>
    }

  }
  createSection({ title, i });
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
      {/* 
      <Sections title="Section 1" id="section 1" />
      <Sections title="Section 2" id="section 2" />
      <Sections title="Section 3" id="section 3" />
      <Sections title="Section 4" id="section 4" />
      <Sections title="Section 5" id="section 5" /> */}

    </main>
  )
}
