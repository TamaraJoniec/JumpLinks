type Props = {
    title: string;
    i?: number;
  };

export default function Sections ({title, i}:Props) {
    return (
        <section
        id={`section-${i}`}
        data-index={i}
        key={`section-${i}`}
        className="min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
        <p className="py-20 text-2xl">{title}</p>
      </section>
    )
}