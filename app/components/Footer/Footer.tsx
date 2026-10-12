import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="section-shell">
        <p className="eyebrow text-accent">Have a project in mind?</p>
        <a className="site-footer__email" href="mailto:wong31415@gmail.com">Let’s talk<span>↗</span></a>
        <div className="site-footer__meta">
          <p>Based in Hong Kong · Open to the world</p>
          <div><Link href="https://github.com/gordonwky/" target="_blank">GitHub ↗</Link><Link href="https://wong31415.wixsite.com/travel-blog/" target="_blank">Travel journal ↗</Link></div>
          <p>© {new Date().getFullYear()} Gordon Wong</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
