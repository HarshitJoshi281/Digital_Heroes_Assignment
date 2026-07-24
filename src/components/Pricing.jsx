const plans = [
  {
    name: "Starter",
    price: "$29",
    features: [
      "1 Website",
      "Responsive Design",
      "Basic SEO",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    popular: true,
    features: [
      "5 Pages Website",
      "Advanced SEO",
      "Priority Support",
      "Performance Optimization",
    ],
  },
  {
    name: "Enterprise",
    price: "$149",
    features: [
      "Unlimited Pages",
      "Custom Development",
      "24/7 Support",
      "Dedicated Manager",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="section-subtitle">
          Flexible pricing for businesses of every size.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`price-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <span className="badge-plan">Most Popular</span>}

              <h3>{plan.name}</h3>

              <h1>{plan.price}</h1>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button className="primary-btn">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;