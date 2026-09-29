import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import HomePage from "../pages/HomePage";
import ReportsPage from "../pages/ReportsPage";
import NewReportPage from "../pages/NewReportPage";
import ReportDetailsPage from "../pages/ReportDetailsPage";
import DashboardPage from "../pages/DashboardPage";

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
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;