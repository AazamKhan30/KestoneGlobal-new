import ServiceCard from "./ServiceCard";
const Services = ({ data }) => {
  return (
    <section className="services section-padding-sm">
      <div className="container">
        <div className="row gy-5">
          {data &&
            data.map((card, index) => (
              <div className="col-md-4 mb-3 mb-md-5">
                <ServiceCard {...card} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
