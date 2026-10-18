import { useState } from "react";

import ReportsContext from "./ReportsContext";
import initialReports from "./reportData";
import currentCollector from "../../data/currentCollector";

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

  function claimReport(reportId) {
    setReports((currentReports) =>
      currentReports.map((report) => {
        if (
          report.id !== reportId ||
          report.status !== "Open" ||
          report.assignedTo
        ) {
          return report;
        }

        return {
          ...report,
          status: "In Progress",
          assignedTo: currentCollector.id,
          activity: [
            ...(report.activity ?? []),
            {
              id: `${report.id}-claimed-${Date.now()}`,
              type: "claimed",
              label: `Collection claimed by ${currentCollector.name}`,
              date: "Just now",
            },
          ],
        };
      })
    );
  }

  return (
    <ReportsContext.Provider
      value={{ reports, addReport, cancelReport, claimReport }}
    >
      {children}
    </ReportsContext.Provider>
  );
}

export default ReportsProvider;
