import { NavLink } from "react-router";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box ">
        <img src={flags.svg} alt={flags.alt} />
        <div className="countryInfo">
          <p className="card-title">
            <span className="card-description"></span>
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p className="card-description">
            <span>Population :</span>
            {population}
          </p>
          <p className="card-description">
            <span>Resion : </span>
            {region}
          </p>
          <p className="card-description">
            <span>Capital : </span>
            {capital?.[0]?.length > 10
              ? capital[0].slice(0, 10) + "..."
              : capital?.[0] || "N/A"}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button>read more</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
