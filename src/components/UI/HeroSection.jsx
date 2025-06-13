import { FaLongArrowAltRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <main className="hero-section  main">
      <div className="grid container grid-two-cols">
        <div className="hero-content">
          <h1 className="heading">
            Explore's the world , <br />
            one country at time
          </h1>
          <p className="paragraph">
            Discover the history , culture and bueaty of every nation. sort
            search, and filter throw the country to find details you need.
          </p>
          <button className="button">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="image">
          <img
            className="baner-image"
            src="./images/world.png"
            alt="world-image"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
