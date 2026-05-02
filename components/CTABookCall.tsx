"use client";

import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const CAL_URL = "https://dot-connectors-llc.cal.com/nicholas/strategy-call";

export function CTABookCall() {
  return (
    <section id="cta" className="cta section--dark">
      <div className="section__inner">
        <Reveal>
          <h2>Stop missing leads.<br /><span className="accent">Book a call.</span></h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="cta__sub">
            15 minutes with Nicholas. We&apos;ll show you exactly how the AI front office works for your business.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta__send cta__send--full"
            style={{ maxWidth: 320, margin: "0 auto" }}
          >
            <Icon name="calendar" size={16} strokeWidth={2.5} />
            <span>Book a Call</span>
          </a>
          <p className="cta__consent">
            Free strategy call. No obligation. We&apos;ll text a confirmation after booking.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
