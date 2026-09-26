import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../features/home/Hero";
import HowItWorks from "../features/home/HowItWorks";
import Stats from "../features/home/Stats";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <Stats />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;