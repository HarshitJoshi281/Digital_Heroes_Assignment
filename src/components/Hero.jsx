const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-left">
          <span className="badge">🚀 Trusted by 250+ Businesses</span>

          <h1>
            We Build <span>Digital Experiences</span> That Grow Your Business
          </h1>

          <p>
            NorthPeak Digital helps startups and businesses scale through
            modern web development, branding, and digital marketing solutions.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Services</button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>250+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>Satisfaction</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <h3>NorthPeak Digital</h3>

            <p>Helping brands reach new heights.</p>

            <div className="card-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;