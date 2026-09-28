import { Outlet } from "react-router-dom";

import ScrollToTop from "./hooks/ScrollToTop";
import ReportsProvider from "./features/reports/ReportsProvider";

function App() {
  return (
    <ReportsProvider>
      <div className="app">
        <ScrollToTop />

        <Outlet />
      </div>
    </ReportsProvider>
  );
}

export default App;