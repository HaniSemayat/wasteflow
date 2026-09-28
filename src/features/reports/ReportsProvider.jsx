import { useState } from "react";

import ReportsContext from "./ReportsContext";
import initialReports from "./reportData";

function ReportsProvider({ children }) {
  const [reports, setReports] = useState(initialReports);

  function addReport(report) {
    setReports((currentReports) => [report, ...currentReports]);
  }

  return (
    <ReportsContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportsContext.Provider>
  );
}

export default ReportsProvider;