import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import useReports from "../features/reports/useReports";
import currentCollector from "../data/currentCollector";

function CollectorDashboardPage() {
  const { reports, claimReport } = useReports();

  const availableReports = reports.filter(
    (report) =>
      report.status === "Open" && !report.assignedTo
  );

  const myAssignedReports = reports.filter(
    (report) => report.assignedTo === currentCollector.id
  );

  function handleClaim(report) {
    const confirmed = window.confirm(
      `Claim "${report.title}" for collection?`
    );

    if (confirmed) {
      claimReport(report.id);
    }
  }

  return (
    <>
      <Navbar />

      <main className="collector-page">
        <section className="collector-header">
          <p className="eyebrow">Collector workspace</p>
          <h1>Manage waste collection.</h1>
          <p>
            Review reported waste problems, claim available work,
            and track the reports assigned to you.
          </p>
          <p className="collector-identity">
            Signed in as <strong>{currentCollector.name}</strong>
          </p>
        </section>

        <section className="collector-section">
          <div className="collector-section-header">
            <div>
              <p className="eyebrow">Available work</p>
              <h2>Open reports</h2>
            </div>
            <span className="collector-count">
              {availableReports.length} available
            </span>
          </div>

          {availableReports.length === 0 ? (
            <div className="empty-state">
              <h2>No reports available</h2>
              <p>
                There are no open reports waiting to be claimed.
              </p>
            </div>
          ) : (
            <div className="collector-report-list">
              {availableReports.map((report) => (
                <article
                  className="collector-report-card"
                  key={report.id}
                >
                  <div className="collector-report-content">
                    <div className="report-card-top">
                      <span className="status status-open">
                        Open
                      </span>
                      <span className="severity">
                        {report.severity} severity
                      </span>
                    </div>

                    <p className="eyebrow">{report.category}</p>
                    <h3>{report.title}</h3>
                    <p>{report.description}</p>

                    <div className="collector-report-location">
                      <span>
                        {report.area}, {report.city}
                      </span>
                      <span>Reported {report.reportedAt}</span>
                    </div>

                    <div className="collector-report-actions">
                      <Link to={`/reports/${report.id}`}>
                        View details
                      </Link>
                      <button
                        type="button"
                        className="button button-primary"
                        onClick={() => handleClaim(report)}
                      >
                        Claim report
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="collector-section">
          <div className="collector-section-header">
            <div>
              <p className="eyebrow">Your workload</p>
              <h2>My assigned reports</h2>
            </div>
            <span className="collector-count">
              {myAssignedReports.length} assigned
            </span>
          </div>

          {myAssignedReports.length === 0 ? (
            <div className="empty-state">
              <h2>No assigned reports yet</h2>
              <p>
                Claim an open report above to add it to your workload.
              </p>
            </div>
          ) : (
            <div className="collector-report-list">
              {myAssignedReports.map((report) => (
                <article
                  className="collector-report-card"
                  key={report.id}
                >
                  <div className="collector-report-content">
                    <div className="report-card-top">
                      <span className="status status-in-progress">
                        In Progress
                      </span>
                      <span className="severity">
                        {report.severity} severity
                      </span>
                    </div>

                    <h3>{report.title}</h3>
                    <p>
                      {report.area}, {report.city}
                    </p>

                    <div className="collector-report-actions">
                      <Link to={`/reports/${report.id}`}>
                        View report and activity →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CollectorDashboardPage;
