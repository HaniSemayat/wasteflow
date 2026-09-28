import { useState } from "react";

function ReportForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [severity, setSeverity] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validateForm() {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Please enter a problem title.";
    }

    if (!category) {
      newErrors.category = "Please select a category.";
    }

    if (!area) {
      newErrors.area = "Please select an area.";
    }

    if (!severity) {
      newErrors.severity = "Please select the severity.";
    }

    if (!description.trim()) {
      newErrors.description = "Please describe the waste problem.";
    } else if (description.trim().length < 20) {
      newErrors.description =
        "Description must be at least 20 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  }

  if (isSubmitted) {
    return (
      <section className="form-success">
        <p className="eyebrow">Report submitted</p>

        <h2>Thank you for reporting this problem.</h2>

        <p>
          Your report has been recorded and will be available for tracking
          once the reporting system is connected to the backend.
        </p>
      </section>
    );
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

        {errors.title && (
          <p className="form-error">{errors.title}</p>
        )}
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

        {errors.category && (
          <p className="form-error">{errors.category}</p>
        )}
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

        {errors.area && (
          <p className="form-error">{errors.area}</p>
        )}
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

        {errors.severity && (
          <p className="form-error">{errors.severity}</p>
        )}
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

        {errors.description && (
          <p className="form-error">{errors.description}</p>
        )}
      </div>

      <button
        type="submit"
        className="button button-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Report"}
      </button>
    </form>
  );
}

export default ReportForm;