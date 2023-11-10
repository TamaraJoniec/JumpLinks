'use client'

type Props = {
    section: {title: string, description: string};
    i?: number;
  };

export default function Sections ({section, i}:Props) {
    return (
        <section
        id={`section-${i}`}
        data-title={section.title}
        data-index={i}
        key={`section-${i}`}
        className="min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
        <h3 className="py-20 text-2xl">{section.title}</h3>
        <p>{section.description}</p>
      </section>
    )
}