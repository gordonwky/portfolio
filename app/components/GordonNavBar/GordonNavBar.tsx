"use client";

import Link from "next/link";

export default function GordonNavBar() {
  return (
    <header className="site-nav">
      <Link href="/" className="site-nav__brand" aria-label="Gordon Wong, home">GW<span>®</span></Link>
      <nav aria-label="Primary navigation">
        <Link href="/#Projects">Work</Link>
        <Link href="/#Experience">About</Link>
        <Link href="/interests">Interests</Link>
      </nav>
      <Link href="/#contact" className="site-nav__contact"><i /> Available for opportunities</Link>
    </header>
  );
}
