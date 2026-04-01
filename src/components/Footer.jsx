import { socialLinks } from "../assets/portfolioData";

function Footer() {
  return (
    <footer className="px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="theme-nav theme-text-muted mx-auto flex max-w-7xl flex-col gap-4 rounded-[2rem] px-6 py-6 text-sm backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Manpreet Singh. All rights reserved.</p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
