import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          WasteFlow
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/reports/new">Report a Problem</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;