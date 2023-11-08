type Props = {
    title: string;
    content: string;
  };

export default function Sections({title, content}:Props) {
  
    return (
        <section className=" min-h-[75vh] min-w-[100vw] bg-slate-300 py-10 px-40 my-5">
            <p className="text-2xl">{title}</p>
            <p className="text-2xl">{content}</p>
        </section>
    )
}