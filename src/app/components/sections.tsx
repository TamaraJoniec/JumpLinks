type Props = {
    title: string;
    id: string;
    i?: number;
  };

export default function createSection ({title, id, i}:Props) {
    return (
        <section id={`"section ${i}"`} className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
            <p className="text-2xl">{title}{i}</p>
        </section>
    )
}