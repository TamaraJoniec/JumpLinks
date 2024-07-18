"use client";

import Image from "next/image";

type Props = {
  section: { title: string; description: string; image: string; alt: string };
  i?: number;
};

export default function Sections({ section, i }: Props) {
  return (
    <section
      id={`section-${i}`}
      data-title={section.title}
      data-index={i}
      key={`section-${i}`}
      className="min-h-[75vh] min-w-[100vw] relative my-10 overflow-hidden"
    >
      <picture className="absolute z-0 inset-0">
        <Image
          src={section.image}
          alt={section.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={i === 0}
        />
      </picture>
      <div
        className="bg-black opacity-70 z-1 min-h-[75vh] min-w-[100vw] absolute py-10 px-40"
        aria-label={section.alt}
      ></div>
      <div className="flex flex-col m-12 gap-16 absolute z-2 md:w-1/2">
        <h3 className="text-3xl font-bold text-white">{section.title}</h3>
        <p className="text-md md:text-sm text-white">
          {section.description}
        </p>
      </div>
    </section>
  );
}
