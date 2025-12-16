import { highlights } from "../data/content";
import SectionHeader from "../components/SectionHeader";

export default function Highlights() {
  return (
    <section className="section-shell py-12">
      <SectionHeader eyebrow="What I bring" title="Defender mindset with builder energy" />
      <div className="card-grid">
        {highlights.map((item) => (
          <article key={item.title} className="glass rounded-2xl p-6 shadow-card">
            <div className="pill mb-3">
              <span className="badge-dot" aria-hidden />
              {item.title}
            </div>
            <p className="text-sand/75 leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
