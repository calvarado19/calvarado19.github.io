import { hero, socials } from "../data/content";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-12">
      <SectionHeader eyebrow="Contact" title="Let\'s collaborate" />
      <div className="glass rounded-3xl p-8 shadow-card grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <p className="pill w-fit">Responsive & detail-driven</p>
          <h3 className="text-2xl font-semibold text-sand">Ready for blue team projects, lab builds, and documentation.</h3>
          <p className="text-sand/70 leading-relaxed">
            I enjoy pairing with teammates to harden systems, triage incidents, and capture what we learned in clear writeups.
            Reach out and let me know what you\'re building.
          </p>
        </div>
        <div className="grid gap-3">
          <a className="btn-primary" href={`mailto:${hero.email}`}>
            Email {hero.email}
          </a>
          {socials.map((social) => (
            <a
              key={social.label}
              className="btn-ghost"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
