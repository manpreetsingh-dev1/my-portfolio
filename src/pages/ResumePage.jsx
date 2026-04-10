import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import resumeFile from "../assets/MANPREET SINGH RESUME.pdf";

function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "manpreet-singh-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="theme-app theme-text-primary relative min-h-screen overflow-x-hidden">
      <div className="page-grid" />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h1 className="text-3xl font-bold">My Resume</h1>
              <p className="theme-text-secondary mt-2">MERN Stack Developer | Full Stack Development</p>
            </div>
            <button
              onClick={handleDownload}
              className="theme-primary-button flex items-center gap-2 rounded-full px-6 py-3 font-medium transition hover:-translate-y-0.5"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="glass-panel rounded-2xl overflow-hidden">
            {isLoading && (
              <div className="flex items-center justify-center h-96">
                <p className="theme-text-muted">Loading resume...</p>
              </div>
            )}
            <iframe
              src={resumeFile}
              className="w-full h-screen"
              title="Resume"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Footer Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#resume"
              className="theme-secondary-button inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition hover:-translate-y-0.5"
            >
              ← Back to Portfolio
            </a>
            <a
              href="/#contact"
              className="theme-secondary-button inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ResumePage;
