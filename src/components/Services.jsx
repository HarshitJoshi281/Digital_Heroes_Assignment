import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaMobileAlt,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Modern, responsive websites built for performance and scalability.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Beautiful interfaces that deliver seamless user experiences.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Reach the right audience through strategic campaigns.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for Android and iOS.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Improve search rankings and increase organic traffic.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Growth",
    desc: "Data-driven strategies to grow your online presence.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Everything you need to build, launch and grow your business online.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;