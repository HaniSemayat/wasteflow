import { useState } from "react";

import ReportsContext from "./ReportsContext";
import initialReports from "./reportData";

function ReportsProvider({ children }) {
  const [reports, setReports] = useState(initialReports);

  function addReport(report) {
    setReports((currentReports) => [report, ...currentReports]);
  }

  function cancelReport(reportId) {
    setReports((currentReports) =>
      currentReports.map((report) => {
        if (
          report.id !== reportId ||
          report.status !== "Open" ||
          report.reportedBy !== "resident-1"
        ) {
          return report;
        }

        return {
          ...report,
          status: "Cancelled",
          activity: [
            ...(report.activity ?? []),
            {
              id: `${report.id}-cancelled-${Date.now()}`,
              type: "cancelled",
              label: "Report cancelled",
              date: "Just now",
            },
          ],
        };
      })
    );
  }

  return (
    <ReportsContext.Provider
      value={{ reports, addReport, cancelReport }}
    >
      {children}
    </ReportsContext.Provider>
  );
}

export default ReportsProvider;
