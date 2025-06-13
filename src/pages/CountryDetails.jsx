import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router";
import { getIndCountryData } from "../API/PostApi";
import { NavLink } from "react-router";

const CountryDetails = () => {
  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndCountryData(params.id);

      if (res.status === 200) {
        setCountry(res.data[0]);
      }

      console.log(res);
      console.log(Object.keys(res.data[0].name.nativeName));
    });
  }, []);
  if (isPending || !country) return <h1>Loading...</h1>;
  return (
    <section className="card country-details-card">
      <div className="container-card ">
        <div className="country-image grid grid-two-cols">
          <img src={country.flags.svg} alt={country.flags.alt} />

          <div className="country-content">
            <p className="card-title">{country.name.official}</p>
            <div className="info-container">
              <p>
                <span className="card-description">Native Name:</span>
                {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")}
              </p>
              <p>
                <span className="card-description">Population: </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="card-description">region : </span>
                {country.region}
              </p>
              <p>
                <span className="card-description">Sub region : </span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="card-description">Capital : </span>
                {country.capital}
              </p>
              <p>
                <span className="card-description">Top level Domain : </span>
                {country.tld[0]}
              </p>
              <p>
                <span className="card-description">currencies :</span>
                {Object.keys(country.currencies)
                  .map((curre) => country.currencies[curre].name)
                  .join(",")}
              </p>
              <p>
                <span className="card-description">Language : </span>
                {Object.keys(country.languages)
                  .map((key) => country.languages[key])
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="country-card-backBtn">
          <NavLink to="/country">
            <button className="btn-country">Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
