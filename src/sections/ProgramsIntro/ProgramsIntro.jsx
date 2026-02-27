import { useRef } from 'react';
import './ProgramsIntro.css';

/**
 * ProgramsIntro — Full-viewport section introducing the programs catalogue.
 *
 * Figma frame: "Programs Intro" (node 594:1603), 1944 × 1080 px.
 * "Designs with Variables" page.
 *
 * Layout is derived from the "Page Elements" horizontal-flex child frame:
 *   absoluteBoundingBox: x=1815, y=5394, w=2113.48, h=1398.76
 *   itemSpacing: 140 px
 *   → text block ≈ 574 px wide, orb diameter ≈ 1399 px
 *   → section-relative orb left edge: 42.6 %, top edge: −29.5 %
 *
 * orbRef is exposed for a future GSAP ScrollTrigger animation where the
 * orb expands leftward and transitions into the first program section.
 *
 * TODO: Replace body paragraph text with final copy from Figma.
 */
export default function ProgramsIntro() {
  const orbRef = useRef(null);

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

      {/* ── Orb — right side, bleeds above and off the right edge ── */}
      {/*
        Positioned exactly from Figma Page Elements frame geometry.
        Ready for GSAP ScrollTrigger: on scroll, this orb should
        expand (scale) from its current right-anchored position
        leftward, eventually filling or transitioning into the
        first program section below.
        transform-origin is set to its visual center for clean scaling.
      */}
      <div className="pi__orb" ref={orbRef} aria-hidden="true" />

    </section>
  );
}
