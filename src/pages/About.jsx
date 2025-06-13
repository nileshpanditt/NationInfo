import Country from "../API/Country.json";
const About = () => {
  return (
    <section className="about-section container">
      <div className="container-title">
        <h1 className="container-title">
          Here Are The intresting Fact <br />
          we'are proud of you
        </h1>
      </div>
      <div className="gradient-card">
        {Country.map((country) => {
          const { name, id, population, capital, interestingFact } = country;
          return (
            <>
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <p className="card-title">{name}</p>
                  <p>
                    <span className="card-description ">Capital : </span>
                    {capital}
                  </p>
                  <p>
                    <span className="card-description ">Population : </span>
                    {population}
                  </p>
                  <p>
                    <span className="card-description ">
                      Intresting Fact :{" "}
                    </span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default About;
