import { socials } from "../data/content";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-night/80 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#top" className="text-xl font-display font-semibold text-sand">
          <span className="title-gradient">Carlos</span> Alvarado
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-sand/80 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              className="transition hover:text-mint"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-sm">
          {socials.slice(0, 2).map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost hidden sm:inline-flex"
            >
              {social.label}
            </a>
          ))}
          <a className="btn-primary" href="#contact">
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
