import { useTheme } from "./themeContext";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 4V2M12 22v-2M4 12H2M22 12h-2M6.34 6.34 4.93 4.93M19.07 19.07l-1.41-1.41M17.66 6.34l1.41-1.41M4.93 19.07l1.41-1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M20 15.79A8.5 8.5 0 1 1 8.21 4 6.5 6.5 0 0 0 20 15.79Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-icon-button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className={`theme-icon-shell ${!isDark ? "theme-icon-active" : ""}`}>
        <SunIcon />
      </span>
      <span className={`theme-icon-shell ${isDark ? "theme-icon-active" : ""}`}>
        <MoonIcon />
      </span>
    </button>
  );
}

export default ThemeToggle;
