import PropTypes from "prop-types";

export default function SectionHeader({ eyebrow, title, cta }) {
  return (
    <div className="section-header">
      <div>
        <p className="pill mb-2">
          <span className="badge-dot" aria-hidden />
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-sand">{title}</h2>
      </div>
      {cta}
    </div>
  );
}

SectionHeader.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cta: PropTypes.node,
};
