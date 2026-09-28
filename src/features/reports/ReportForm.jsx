import { useState } from "react";

function ReportForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [severity, setSeverity] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      title,
      category,
      area,
      severity,
      description,
    });
  }

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="report-title">Problem title</label>

        <input
          id="report-title"
          type="text"
          placeholder="e.g. Overflowing waste bin"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="report-category">Category</label>

        <select
          id="report-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Overflowing Bin">Overflowing Bin</option>
          <option value="Missed Collection">Missed Collection</option>
          <option value="Illegal Dumping">Illegal Dumping</option>
          <option value="Accumulation">Accumulation</option>
          <option value="Damaged Bin">Damaged Bin</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="report-area">Area</label>

        <select
          id="report-area"
          value={area}
          onChange={(event) => setArea(event.target.value)}
        >
          <option value="">Select an area</option>
          <option value="Bole">Bole</option>
          <option value="Kazanchis">Kazanchis</option>
          <option value="Merkato">Merkato</option>
          <option value="Piassa">Piassa</option>
          <option value="Sar Bet">Sar Bet</option>
          <option value="CMC">CMC</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="report-severity">Severity</label>

        <select
          id="report-severity"
          value={severity}
          onChange={(event) => setSeverity(event.target.value)}
        >
          <option value="">Select severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="report-description">Description</label>

        <textarea
          id="report-description"
          rows="6"
          placeholder="Describe the waste problem..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <button type="submit" className="button button-primary">
        Submit Report
      </button>
    </form>
  );
}

export default ReportForm;