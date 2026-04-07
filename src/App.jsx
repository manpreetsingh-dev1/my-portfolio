import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ResumePage from "./pages/ResumePage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#/resume") {
        setCurrentPage("resume");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Handle navigation via function
  window.navigateToResume = () => {
    window.location.hash = "#/resume";
  };

  window.navigateToHome = () => {
    window.location.hash = "#";
  };

  return currentPage === "resume" ? <ResumePage /> : <Home />;
}

export default App;
