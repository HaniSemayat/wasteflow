import ReportCard from "./ReportCard";

function ReportList({ reports }) {
  if (reports.length === 0) {
    return (
      <div className="empty-state">
        <h2>No reports found</h2>
        <p>
          Try changing your search or filters to find other waste reports.
        </p>
      </div>
    );
  }

  return (
    <div className="report-list">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
}

export default ReportList;