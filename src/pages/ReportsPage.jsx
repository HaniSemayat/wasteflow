import { useState } from "react";
import useReports from "../features/reports/useReports";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ReportFilters from "../features/reports/ReportFilters";
import ReportList from "../features/reports/ReportList";


function ReportsPage() {
  const { reports } = useReports();

  const [searchTerm, setSearchTerm] = useState("");
  const [area, setArea] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredReports = reports.filter((report) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      report.title.toLowerCase().includes(search) ||
      report.category.toLowerCase().includes(search) ||
      report.area.toLowerCase().includes(search);

    const matchesArea = area === "All" || report.area === area;

    const matchesStatus = status === "All" || report.status === status;

    return matchesSearch && matchesArea && matchesStatus;
  });

  return (
    <>
      <Navbar />

      <main className="reports-page">
        <section className="reports-header">
          <p className="eyebrow">Community reports</p>

          <h1>See what is happening around your community.</h1>

          <p>
            Explore reported waste problems, see their current status, and
            understand where attention is needed.
          </p>
        </section>

        <section className="reports-explorer">
          <ReportFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            area={area}
            onAreaChange={setArea}
            status={status}
            onStatusChange={setStatus}
          />

          <div className="reports-summary">
            <span>
              {filteredReports.length}{" "}
              {filteredReports.length === 1 ? "report" : "reports"} found
            </span>
          </div>

          <ReportList reports={filteredReports} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ReportsPage;