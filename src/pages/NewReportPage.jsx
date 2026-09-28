import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ReportForm from "../features/reports/ReportForm";

function NewReportPage() {
  return (
    <>
      <Navbar />

      <main className="new-report-page">
        <section className="new-report-header">
          <p className="eyebrow">Report a problem</p>

          <h1>Help make waste problems visible.</h1>

          <p>
            Tell us what is happening, where it is happening, and how serious
            the problem is.
          </p>
        </section>

        <ReportForm />
      </main>

      <Footer />
    </>
  );
}

export default NewReportPage;