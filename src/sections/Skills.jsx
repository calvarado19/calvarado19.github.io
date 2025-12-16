import { skills } from "../data/content";
import SectionHeader from "../components/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-12">
      <SectionHeader eyebrow="Skills" title="Stack & tooling" />
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="glass rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-sand">{category}</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
