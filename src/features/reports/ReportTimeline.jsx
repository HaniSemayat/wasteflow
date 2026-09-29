function ReportTimeline({ activity }) {
  return (
    <section className="report-timeline">
      <div className="report-timeline-header">
        <p className="eyebrow">Activity</p>
        <h2>Report timeline</h2>
      </div>

      <div className="timeline-list">
        {activity.map((event) => (
          <div className="timeline-item" key={event.id}>
            <div className="timeline-marker" />

            <div className="timeline-content">
              <strong>{event.label}</strong>
              <span>{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReportTimeline;