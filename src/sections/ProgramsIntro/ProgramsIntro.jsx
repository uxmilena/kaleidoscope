import './ProgramsIntro.css';

/**
 * ProgramsIntro — Full-viewport section introducing the programs catalogue.
 *
 * Figma frame: "Programs Intro" (node 594:1603), 1944 × 1080 px.
 * "Designs with Variables" page.
 *
 * The orb has been promoted to App.jsx as a single shared element
 * spanning the OurBigWhy / ProgramsIntro boundary.
 * orbRef for GSAP ScrollTrigger lives on that shared element.
 *
 * TODO: Replace body paragraph text with final copy from Figma.
 */
export default function ProgramsIntro() {

  return (
    <section className="pi">

      {/* ── Smooth fade continuing from OurBigWhy ──────────── */}
      <div className="pi__fade" aria-hidden="true" />

      {/* ── Text content — left column ─────────────────────── */}
      <div className="pi__content">

        <p className="pi__eyebrow">
          <span className="pi__dot" aria-hidden="true" />
          All the Possibilities
        </p>

        <h2 className="pi__heading">choose your<br />experience</h2>

        <p className="pi__body">
          We&rsquo;ve designed a collection of immersive experiences to suit
          every team — wherever you are on your journey together. Each program
          is crafted to inspire, connect, and elevate.
        </p>

        <p className="pi__body">
          Scroll through our programs to find the one that feels right for
          your team right now.
        </p>

        <a href="#programs" className="pi__scroll-cta">
          Scroll to Explore
          <span className="pi__arrow" aria-hidden="true">→</span>
        </a>

      </div>

    </section>
  );
}
