import Image from 'next/image'
import Navbar from './components/navbar'
import Sections from './components/sections'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <section className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40">
        <p className="text-2xl">Section above jumplinks</p>
      </section>
      {/* sticky nav bar here */}
      <Navbar />
      <Sections title="Section 1" content="Content 1" />
      <Sections title="Section 2" content="Content 2" />
      <Sections title="Section 3" content="Content 3" />
      <Sections title="Section 4" content="Content 4" />
      <Sections title="Section 5" content="Content 5" />

    </main>
  )
}
