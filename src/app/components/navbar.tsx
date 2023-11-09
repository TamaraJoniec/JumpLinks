import Link from 'next/link'
import Script from 'next/script'

export default function Navbar() {
    return (
        // make navbar sticky
        <nav className="sticky top-0 flex flex-row justify-between items-center min-w-[100vw] h-16 bg-zinc-950">
            <div className="flex flex-row justify-between items-center">
            <a
                href={`#section-${i}`}
                key={i}
                className={currentSection === i ? "active" : ""}
              >
                Section {i + 1}
              </a>
            </div>
        </nav>
    )
}