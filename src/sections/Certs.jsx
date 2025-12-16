import { certs } from "../data/content";
import SectionHeader from "../components/SectionHeader";

export default function Certs() {
  return (
    <section id="certs" className="section-shell py-12">
      <SectionHeader eyebrow="Certifications" title="Validations & goals" />
      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((cert) => (
          <div key={cert} className="glass rounded-2xl p-4 flex items-center gap-3">
            <span className="badge-dot" aria-hidden />
            <p className="text-sand/80">{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
