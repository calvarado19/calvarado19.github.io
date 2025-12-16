import { hero } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="section-shell pt-16 pb-12">
      <div className="glass rounded-3xl p-8 md:p-12 flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1 space-y-4">
          <p className="pill w-fit">{hero.location}</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-sand">
            {hero.name}
          </h1>
          <p className="text-lg text-sand/80">{hero.role}</p>
          <p className="max-w-2xl text-sand/70 leading-relaxed">{hero.summary}</p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              Explore Projects
            </a>
            <a
              className="btn-ghost"
              href={hero.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="btn-ghost" href={hero.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-ghost" href={hero.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <div className="flex-1 grid gap-4">
          <div className="glass rounded-2xl p-4">
            <p className="text-sm text-sand/60">Focus</p>
            <p className="text-xl font-semibold text-sand">Blue Team | Networking | Automation</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-4">
              <p className="text-sm text-sand/60">Favorite tools</p>
              <p className="text-lg font-semibold text-sand">Wireshark · Zeek · ASR · MikroTik</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-sm text-sand/60">Collaboration</p>
              <p className="text-lg font-semibold text-sand">Clear reports & playbooks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
