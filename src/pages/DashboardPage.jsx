import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import useReports from "../features/reports/useReports";

function DashboardPage() {
  const { reports } = useReports();

  const totalReports = reports.length;

  const openReports = reports.filter(
    (report) => report.status === "Open"
  ).length;

  const inProgressReports = reports.filter(
    (report) => report.status === "In Progress"
  ).length;

  const resolvedReports = reports.filter(
    (report) => report.status === "Resolved"
  ).length;

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

          <div className="dashboard-report-list">
            {reports.map((report) => (
              <article className="dashboard-report-card" key={report.id}>
                <div>
                  <span className="status">
                    {report.status}
                  </span>

                  <h3>{report.title}</h3>

                  <p>
                    {report.area} · {report.reportedAt}
                  </p>
                </div>

                <span className="severity">
                  {report.severity} severity
                </span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DashboardPage;