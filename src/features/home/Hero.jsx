import Button from "../../components/ui/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Cleaner communities. Better visibility.</p>

        <h1>
          Turn waste problems into
          <span> visible action.</span>
        </h1>

        <p className="hero-description">
          WasteFlow helps residents report waste collection problems, track
          their progress, and build better visibility into local waste
          services.
        </p>

        <div className="hero-actions">
          <Button to="/reports/new">Report a Problem</Button>

          <Button to="/reports" variant="secondary">
            Explore Reports
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;