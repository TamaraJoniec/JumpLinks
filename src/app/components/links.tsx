type Props = {
    title: string;
    i?: number;
    currentSection: number;
};


export default function Links({ title, i, currentSection }: Props) {
    return (
        <a
            href={`#section-${i}`}
            key={i}
            className={currentSection === i ? "active" : ""}
        >
            {title}
        </a>
    )
}