import { Link, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import reports from "../features/reports/reportData";

function ReportDetailsPage() {
  const { id } = useParams();

  const report = reports.find((item) => item.id === id);

  if (!report) {
    return (
      <>
        <Navbar />

        <main className="report-details empty-state">
          <h1>Report not found</h1>
          <p>
            The waste report you're looking for doesn't exist.
          </p>

          <Link to="/reports">Back to reports</Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="report-details">
        <Link to="/reports" className="back-link">
          ← Back to reports
        </Link>

        <section className="report-detail-card">
          <div className="report-card-top">
            <span
              className={`status status-${report.status
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {report.status}
            </span>

            <span className="severity">
              {report.severity} severity
            </span>
          </div>

          <p className="eyebrow">{report.category}</p>

          <h1>{report.title}</h1>

          <p className="report-description">
            {report.description}
          </p>

          <div className="detail-grid">
            <div>
              <span>Location</span>
              <strong>
                {report.area}, {report.city}
              </strong>
            </div>

            <div>
              <span>Reported</span>
              <strong>{report.reportedAt}</strong>
            </div>

            <div>
              <span>Community verification</span>
              <strong>{report.verifications}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>{report.status}</strong>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ReportDetailsPage;