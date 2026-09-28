import { useContext } from "react";

import ReportsContext from "./ReportsContext";

function useReports() {
  return useContext(ReportsContext);
}

export default useReports;