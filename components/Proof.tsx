import { Reveal } from "./Reveal";

export function Proof() {
  return (
    <section className="proof section--dark">
      <div className="section__inner">
        <Reveal>
          <span className="proof__big">78%</span>
        </Reveal>
        <Reveal delay={120}>
          <p className="proof__line">of jobs go to whoever calls back first.</p>
        </Reveal>
        <Reveal delay={240}>
          <p className="proof__sub">That&apos;s almost always not you. Now it is.</p>
        </Reveal>
        <Reveal delay={360}>
          <span className="proof__source">Lead-response research · Harvard Business Review</span>
        </Reveal>
      </div>
    </section>
  );
}
