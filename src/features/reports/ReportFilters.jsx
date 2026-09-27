function ReportFilters({
  searchTerm,
  onSearchChange,
  area,
  onAreaChange,
  status,
  onStatusChange,
}) {
  return (
    <div className="report-filters">
      <div className="search-field">
        <label htmlFor="report-search">Search reports</label>

        <input
          id="report-search"
          type="search"
          placeholder="Search by title, category, or area..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="filter-field">
        <label htmlFor="area-filter">Area</label>

        <select
          id="area-filter"
          value={area}
          onChange={(event) => onAreaChange(event.target.value)}
        >
          <option value="All">All areas</option>
          <option value="Bole">Bole</option>
          <option value="Kazanchis">Kazanchis</option>
          <option value="Merkato">Merkato</option>
          <option value="Piassa">Piassa</option>
          <option value="Sar Bet">Sar Bet</option>
          <option value="CMC">CMC</option>
        </select>
      </div>

      <div className="filter-field">
        <label htmlFor="status-filter">Status</label>

        <select
          id="status-filter"
          value={status}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="All">All statuses</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>
    </div>
  );
}

export default ReportFilters;