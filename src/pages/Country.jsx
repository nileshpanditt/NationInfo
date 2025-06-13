import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/PostApi";
import CountryCard from "./CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountryData(res.data);
      // console.log(res.data);
    });
  }, []);
  if (isPending) return <h1>Loading...</h1>;
  return (
    <section className="country-section ">
      <ul className="grid grid-four-cols">
        {countryData.map((currCountry, index) => {
          return <CountryCard country={currCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
