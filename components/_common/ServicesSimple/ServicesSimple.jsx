import ServiceSimpleCard from "./ServiceSimpleCard";

const ServicesSimple = ({ data, color }) => {
  return (
    <section className="serviceSimple">
      <div className="container">
        <div className="row gy-4">
          {data &&
            data.map((serviceCard, index) => (
              <div className="col-md-4 mb-3 mb-md-5">
                <ServiceSimpleCard {...serviceCard} color={color} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSimple;
