'use client'

type Props = {
  section: { title: string, description: string, image: string, alt: string };
  i?: number;
};

export default function Sections({ section, i }: Props) {
  return (
    <section
      id={`section-${i}`}
      data-title={section.title}
      data-index={i}
      key={`section-${i}`}
      style={{ backgroundImage: `url(${section.image})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat` }}
      className="min-h-[75vh] min-w-[100vw] bg-slate-300 z-0 relative my-10">
      <div className="bg-black opacity-70 z-1 min-h-[75vh] min-w-[100vw] absolute py-10 px-40" aria-label={section.alt}></div>
      <div className="absolute z-2">
        <h3 className="p-10 md:p-20 text-2xl text-white">{section.title}</h3>
        <p className="p-10 text-md md:p-20 md:text-xl text-white">{section.description}</p>
      </div>
    </section>
  )
}