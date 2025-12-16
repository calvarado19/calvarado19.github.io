import { projects } from "../data/content";
import SectionHeader from "../components/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-12">
      <SectionHeader
        eyebrow="Projects"
        title="Recent labs and builds"
        cta={
          <a className="btn-ghost" href="#contact">
            Available for collaborations
          </a>
        }
      />
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.title} className="glass rounded-2xl p-6 shadow-card flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-sand">{project.title}</h3>
                {project.stack && <p className="text-sm text-sand/60">{project.stack}</p>}
              </div>
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost text-xs"
                >
                  Repo
                </a>
              )}
            </div>
            {project.tags && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="text-sand/75 leading-relaxed">{project.summary}</p>
            {project.links?.notes && (
              <a
                className="text-sm font-semibold text-mint hover:text-white transition"
                href={project.links.notes}
                target="_blank"
                rel="noreferrer"
              >
                Read notes
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
