import { Outlet } from "react-router-dom";

import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Outlet />
    </div>
  );
}

export default App;