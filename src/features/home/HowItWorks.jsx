const steps = [
  {
    number: "01",
    title: "Report",
    description:
      "Tell the community about an overflowing bin, missed collection, illegal dumping, or another waste problem.",
  },
  {
    number: "02",
    title: "Track",
    description:
      "Follow the report as it moves through the collection and resolution process.",
  },
  {
    number: "03",
    title: "Resolve",
    description:
      "Collectors and administrators can act on reports and update their progress.",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="section-heading">
        <p className="eyebrow">How WasteFlow works</p>

        <h2>From problem to resolution.</h2>

        <p>
          WasteFlow connects community reports with the people responsible for
          getting waste problems resolved.
        </p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <span>{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;