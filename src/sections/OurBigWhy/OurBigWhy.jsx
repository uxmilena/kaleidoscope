import './OurBigWhy.css';

/**
 * OurBigWhy — Full-width landing section
 *
 * Matches Figma frame "Our Big Why" (node 600:1828) on the
 * "Designs with Variables" page. Frame dimensions: 1944 × 2089 px.
 *
 * All circle/cluster positions are derived from Figma absolute
 * coordinates, converted to percentages of the section dimensions.
 *
 * The bottom orb has been promoted to App.jsx as a single shared element
 * that spans the OurBigWhy / ProgramsIntro boundary.
 *
 * TODO: Replace /nebula.png src values with actual event photography.
 */
export default function OurBigWhy() {

  return (
    <section className="obw">

      {/* ── Cinematic fade from hero space into section navy ── */}
      <div className="obw__hero-fade" aria-hidden="true" />

      {/* ── Axes — local to this section, don't follow scroll ── */}
      <div className="obw__axis-v" aria-hidden="true" />
      <div className="obw__axis-h" aria-hidden="true" />

      {/* ── Text content ──────────────────────────────────── */}
      <div className="obw__content">

        {/* Left column: label · heading · blurb */}
        <div className="obw__col-left">
          <p className="obw__eyebrow">
            <span className="obw__dot" aria-hidden="true" />
            All the Possibilities
          </p>

          <h2 className="obw__heading">our big why</h2>

          <p className="obw__blurb">
            Team success, personal fulfillment, and collective
            well-being. That&rsquo;s our vision for every team, and the
            mission that Kaleidoscope Teams is founded upon.
          </p>
        </div>

        {/* Right column: four body paragraphs */}
        <div className="obw__col-right">
          <p className="obw__para">
            In today&rsquo;s world, we are working virtually, navigating
            hybrid team dynamics, and struggling with high turnover.
            Disconnection is more prevalent than ever. These impersonal
            conditions create burn out, anxiety, apathy, and low quality
            participation and results.
          </p>
          <p className="obw__para">
            You&rsquo;re not alone. The solution begins with connection and
            well-being. Our programs are designed to inspire every person to
            tap into their true nature, connect with their senses, and shift
            limiting perceptions into valuable, confident contributions.
            Through the power of presence and play, teams achieve a state of
            well-being and authentic connection that last far beyond a fun
            day together.
          </p>
          <p className="obw__para">
            Breaking through perceived limitations and going beyond the
            surface of co-worker relationships leads to a new energy in the
            workplace — motivated, grateful people working toward a shared
            vision.
          </p>
          <p className="obw__para obw__para--cta">
            Come as you are, and we&rsquo;ll take care of the rest.
          </p>
        </div>
      </div>

      {/* ── Scattered circular photos ──────────────────────── */}

      {/* Top-left: 427 px equiv — ~22 % section width */}
      <div className="obw__circ obw__circ--tl" aria-hidden="true">
        <img src="/nebula.png" alt="" />
      </div>

      {/* Main circle cluster: outer ring → inner ring → photo
          Cluster container sized to the outer ring (925 px equiv).
          Rings and image are inset as percentages of that container. */}
      <div className="obw__cluster" aria-hidden="true">
        <div className="obw__ring obw__ring--outer" />
        <div className="obw__ring obw__ring--inner" />
        <div className="obw__circ obw__circ--main">
          <img src="/nebula.png" alt="Kaleidoscope dome experience" />
        </div>
      </div>

      {/* Top-right: 344 px equiv — ~17.7 % section width */}
      <div className="obw__circ obw__circ--tr" aria-hidden="true">
        <img src="/nebula.png" alt="" />
      </div>

      {/* Bottom-left: 268 px equiv — ~13.8 % section width */}
      <div className="obw__circ obw__circ--bl" aria-hidden="true">
        <img src="/nebula.png" alt="" />
      </div>

      {/* Bottom-right: 268 px equiv — ~13.8 % section width */}
      <div className="obw__circ obw__circ--br" aria-hidden="true">
        <img src="/nebula.png" alt="" />
      </div>

    </section>
  );
}
