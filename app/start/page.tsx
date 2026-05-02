import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { CalEmbed } from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Schedule Your Strategy Call · Connectors",
  description:
    "Pick a time that works for you. We'll talk through your setup and build a plan together.",
  openGraph: {
    title: "Book a Free Strategy Call · Connectors",
    description:
      "Pick a time that works for you. We'll talk through your setup and build a plan together.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Strategy Call · Connectors",
    description:
      "Pick a time that works for you. We'll talk through your setup and build a plan together.",
  },
};

export default function StartPage() {
  return (
    <div className="bk-page" data-layout="focused">
      <Nav back />

      <section className="bk-hero">
        <div className="bk-canopy" aria-hidden="true">
          <div className="bk-canopy__grid" />
        </div>
        <div className="bk-hero__inner">
          <div className="bk-pitch">
            <div className="bk-pitch__eyebrow">
              <span className="bk-pitch__livedot" aria-hidden="true" />
              Every Lead. Answered. Booked.
            </div>
            <h1 className="bk-pitch__headline">
              Pick a time. <span className="accent">Get your front office back.</span>
            </h1>
            <p className="bk-pitch__sub">
              Open your call log with the founder. See exactly what Connectors would answer and book.
            </p>
            <div className="bk-host">
              <div className="bk-host__row">
                <div className="bk-host__avatar">
                  <Image
                    src="/nicholas.jpg"
                    alt="Nicholas"
                    width={52}
                    height={52}
                    sizes="52px"
                    priority
                  />
                </div>
                <div className="bk-host__body">
                  <p className="bk-host__name">
                    Nicholas
                    <Icon name="check" size={14} strokeWidth={2.5} />
                  </p>
                  <p className="bk-host__role">Founder · Connectors · St. Petersburg, FL</p>
                </div>
              </div>
              <p className="bk-host__quote">
                &ldquo;Worst case, you leave with a plan you can run yourself. Best case, we run it for you. Either way, I&rsquo;ll tell you straight.&rdquo;
              </p>
            </div>
          </div>

          <div className="bk-card">
            <div className="bk-card__top">
              <div className="bk-card__icon" aria-hidden="true">
                <Icon name="calendar" size={22} strokeWidth={1.75} />
              </div>
              <div className="bk-card__top-body">
                <p className="bk-card__eyebrow">Strategy Call</p>
                <h2 className="bk-card__title">Pick a time that works.</h2>
              </div>
            </div>
            <div className="bk-card__meta">
              <span><Icon name="clock" size={14} />45 minutes</span>
              <span><Icon name="video" size={14} />Cal Video</span>
              <span><Icon name="globe" size={14} />America/New_York</span>
            </div>
            <CalEmbed />
          </div>
        </div>
      </section>

      <section className="bk-proof-strip">
        <div className="bk-proof-strip__inner">
          <div className="bk-stat">
            <div className="bk-stat__num">&lt;60<span className="unit">sec</span></div>
            <div className="bk-stat__label">Average lead response on the install</div>
          </div>
          <div className="bk-stat">
            <div className="bk-stat__num">24/7</div>
            <div className="bk-stat__label">Answered. Even Sundays. Even storms.</div>
          </div>
          <div className="bk-stat">
            <div className="bk-stat__num">30<span className="unit">days</span></div>
            <div className="bk-stat__label">Done-for-you front office, fully wired</div>
          </div>
          <div className="bk-stat">
            <div className="bk-stat__num">0</div>
            <div className="bk-stat__label">Leads left in voicemail purgatory</div>
          </div>
        </div>
      </section>

      <section className="bk-fineprint">
        <div className="bk-fineprint__inner">
          <div className="bk-fineprint__col">
            <div className="bk-fineprint__head">
              <Icon name="check" size={14} strokeWidth={2.5} />
              What this call is
            </div>
            <ul className="bk-fineprint__list">
              <li><Icon name="check" size={16} strokeWidth={2.5} />A working session on your phone log</li>
              <li><Icon name="check" size={16} strokeWidth={2.5} />A live demo of your AI answering a call</li>
              <li><Icon name="check" size={16} strokeWidth={2.5} />An honest read on whether we&rsquo;re a fit</li>
            </ul>
          </div>
          <div className="bk-fineprint__col bk-fineprint__col--alt">
            <div className="bk-fineprint__head bk-fineprint__head--off">
              <Icon name="x" size={14} strokeWidth={2.5} />
              What it isn&rsquo;t
            </div>
            <ul className="bk-fineprint__list">
              <li><Icon name="x" size={16} strokeWidth={2.5} />A pitch from a sales team you&rsquo;ll never see again</li>
              <li><Icon name="x" size={16} strokeWidth={2.5} />A SaaS demo you have to wire up yourself</li>
              <li><Icon name="x" size={16} strokeWidth={2.5} />A multi-month onboarding with hidden fees</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
