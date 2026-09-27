import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import HomePage from "../pages/HomePage";
import ReportsPage from "../pages/ReportsPage";
import NewReportPage from "../pages/NewReportPage";
import ReportDetailsPage from "../pages/ReportDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "reports/new",
        element: <NewReportPage />,
      },
      {
        path: "reports/:id",
        element: <ReportDetailsPage />,
      },
    ],
  },
]);

export default router;