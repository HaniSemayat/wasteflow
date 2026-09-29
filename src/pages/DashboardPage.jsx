import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import useReports from "../features/reports/useReports";
import currentUser from "../data/currentUser";

function DashboardPage() {
  const { reports } = useReports();

  const [statusFilter, setStatusFilter] = useState("All");

  const myReports = reports.filter(
    (report) => report.reportedBy === currentUser.id
  );

  const totalReports = myReports.length;

  const openReports = myReports.filter(
    (report) => report.status === "Open"
  ).length;

  const inProgressReports = myReports.filter(
    (report) => report.status === "In Progress"
  ).length;

  const resolvedReports = myReports.filter(
    (report) => report.status === "Resolved"
  ).length;

  const visibleReports =
    statusFilter === "All"
      ? myReports
      : myReports.filter(
          (report) => report.status === statusFilter
        );

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="dashboard-header">
          <p className="eyebrow">Resident dashboard</p>

          <h1>Keep track of your reports.</h1>

          <p>
            See the waste problems you have reported and follow their
            progress from one place.
          </p>
        </section>

        <section className="dashboard-stats">
          <div className="dashboard-stat">
            <span>Total reports</span>
            <strong>{totalReports}</strong>
          </div>

          <div className="dashboard-stat">
            <span>Open</span>
            <strong>{openReports}</strong>
          </div>

          <div className="dashboard-stat">
            <span>In progress</span>
            <strong>{inProgressReports}</strong>
          </div>

          <div className="dashboard-stat">
            <span>Resolved</span>
            <strong>{resolvedReports}</strong>
          </div>
        </section>

        <section className="dashboard-reports">
          <div className="dashboard-section-header">
            <div>
              <p className="eyebrow">Your activity</p>
              <h2>My reports</h2>
            </div>
          </div>

          <div className="dashboard-filters">
            <button
              type="button"
              className={
                statusFilter === "All"
                  ? "dashboard-filter active"
                  : "dashboard-filter"
              }
              onClick={() => setStatusFilter("All")}
            >
              All
            </button>

            <button
              type="button"
              className={
                statusFilter === "Open"
                  ? "dashboard-filter active"
                  : "dashboard-filter"
              }
              onClick={() => setStatusFilter("Open")}
            >
              Open
            </button>

            <button
              type="button"
              className={
                statusFilter === "In Progress"
                  ? "dashboard-filter active"
                  : "dashboard-filter"
              }
              onClick={() => setStatusFilter("In Progress")}
            >
              In Progress
            </button>

            <button
              type="button"
              className={
                statusFilter === "Resolved"
                  ? "dashboard-filter active"
                  : "dashboard-filter"
              }
              onClick={() => setStatusFilter("Resolved")}
            >
              Resolved
            </button>
          </div>

          <p className="dashboard-results">
            Showing {visibleReports.length}{" "}
            {visibleReports.length === 1 ? "report" : "reports"}
          </p>

          <div className="dashboard-report-list">
            {visibleReports.length === 0 ? (
              <div className="empty-state">
                <h2>No reports in this status</h2>
                <p>
                  You don't have any reports matching the selected
                  status.
                </p>
              </div>
            ) : (
              visibleReports.map((report) => (
                <article
                  className="dashboard-report-card"
                  key={report.id}
                >
                  <div>
                    <span
                      className={`status status-${report.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {report.status}
                    </span>

                    <h3>{report.title}</h3>

                    <p>
                      {report.area} � {report.reportedAt}
                    </p>
                  </div>

                  <div className="dashboard-report-actions">
                    <span className="severity">
                      {report.severity} severity
                    </span>

                    <Link to={`/reports/${report.id}`}>
                      View report →
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DashboardPage;
