import { Link } from "react-router-dom";

function ReportCard({ report }) {
  return (
    <article className="report-card">
      <div className="report-card-top">
        <span className={`status status-${report.status.toLowerCase().replace(" ", "-")}`}>
          {report.status}
        </span>

        <span className="severity">
          {report.severity} severity
        </span>
      </div>

      <h2>{report.title}</h2>

      <p className="report-category">{report.category}</p>

      <p className="report-description">{report.description}</p>

      <div className="report-meta">
        <span>{report.area}</span>
        <span>{report.reportedAt}</span>
      </div>

      <div className="report-card-bottom">
        <span>{report.verifications} community verifications</span>

        <Link to={`/reports/${report.id}`}>
          View report →
        </Link>
      </div>
    </article>
  );
}

export default ReportCard;