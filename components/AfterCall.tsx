"use client";

import { useEffect, useState, type CSSProperties } from "react";
import ThankYouNav from "./ThankYouNav";
import ThankYouFooter from "./ThankYouFooter";

// After-the-call thank-you — neutral & simple. The call already happened and the
// outcome is unknown, so no CTA, no calendar, no pitch. Just a gracious, even-handed
// close that matches the booking confirmation page (/thankyou). Sibling of ThankYou.tsx.
export default function AfterCall() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 60);
    return () => clearTimeout(t);
  }, []);

  const r = (delay: number): CSSProperties => ({
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(14px)",
    transition: `opacity 0.7s var(--ease) ${delay}s, transform 0.7s var(--ease) ${delay}s`,
  });

  return (
    <div className="thanks">
      <div aria-hidden="true" className="thanks__glow" />
      <ThankYouNav />

      <main className="thanks__main">
        <div className="thanks__eyebrow" style={r(0.0)}>
          <span className="thanks__dot" />
          <span className="thanks__eyebrow-text">Thanks for the time</span>
        </div>

        <h1 className="thanks__headline" style={r(0.08)}>
          Good talk.
        </h1>

        <p className="thanks__sub" style={r(0.18)}>
          Thanks for spending the time with us today. We don&apos;t take it for granted.
        </p>

        <div className="thanks__divider" style={r(0.28)} />

        <p className="thanks__note" style={r(0.34)}>
          Think of something after we hung up? Email Nicholas at{" "}
          <a href="mailto:nicholas@getconnectors.ai">nicholas@getconnectors.ai</a>. It goes
          straight to him.
        </p>

        <p className="thanks__signoff" style={r(0.46)}>
          Either way, it was good to meet you.
        </p>
      </main>

      <ThankYouFooter />
    </div>
  );
}
