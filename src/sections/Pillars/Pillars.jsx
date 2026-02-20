import "./pillars.css";

export default function Pillars() {
  return (
    <section className="pillars">
      {/* top space */}
      <div className="pillars__space">
        <div className="pillars__content">
          <div className="pillars__eyebrow">OUR METHOD</div>
          <h2 className="pillars__title">
            the pillars <br /> of connection
          </h2>

          <p className="pillars__quote">
            “Wellness is the complete integration of body, mind, and spirit — the
            realization that everything we do, think, feel, and believe has an
            effect on our state of well-being.”
          </p>
          <p className="pillars__author">Greg Anderson</p>
        </div>
      </div>

      {/* angled photo strip */}
      <div className="pillars__photoBand">
        <div className="pillars__photoInner">
          {/* Replace with your own image path */}
          <img
            className="pillars__photo"
            src="/your-photo.jpg"
            alt="Kaleidoscope teams event moment"
          />
        </div>
      </div>

      {/* bottom blue */}
      <div className="pillars__blue" />
    </section>
  );
}
