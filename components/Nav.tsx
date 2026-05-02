"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          <BrandMark />
          <span>Connectors</span>
        </a>
        <a href="/start" className="btn btn--nav">Book a Call</a>
      </div>
    </nav>
  );
}
