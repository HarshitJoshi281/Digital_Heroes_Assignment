const testimonials = [
  {
    name: "Harshit Joshi",
    role: "CEO, HJ Corp",
    review:
      "NorthPeak Digital completely transformed our online presence. The team was professional and delivered beyond our expectations.",
  },
  {
    name: "Michael Chen",
    role: "Founder, BrightLabs",
    review:
      "Our website traffic increased significantly after working with them. Highly recommended for startups.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Director",
    review:
      "Excellent communication, modern design, and outstanding support throughout the project.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Trusted by businesses worldwide.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="review">"{item.review}"</p>

              <div className="client-info">
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;