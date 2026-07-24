const stats = [
  { number: "250+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Team Members" },
  { number: "12+", label: "Years of Experience" },
];

const Results = () => {
  return (
    <section className="results">
      <div className="container">
        <h2 className="section-title">Results That Speak</h2>
        <p className="section-subtitle">
          We help businesses achieve measurable growth with modern digital
          solutions.
        </p>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;