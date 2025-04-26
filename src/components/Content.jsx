import { useParams } from "react-router-dom";
import planetData from "../../data/data.json";

import Actions from "./Actions";
import Cards from "./Cards";

function Content() {
  const { planet, section } = useParams();

  const currentPlanet = planetData.find(
    (pt) => pt.name.toLowerCase() === planet
  );

  const cards = [
    { label: "Rotation Time", value: currentPlanet.rotation },
    { label: "Revolution Time", value: currentPlanet.revolution },
    { label: "Radius", value: currentPlanet.radius },
    { label: "Average Temp.", value: currentPlanet.temperature },
  ];

  if (!currentPlanet) {
    return <div>Planet not found</div>;
  }

  return (
    <>
      <section className="w-full">
        <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:max-w-1/2 flex flex-col justify-center items-center">
            {section === "overview" && (
              <img
                src={currentPlanet.images.planet.replace("./", "/")}
                alt={`${currentPlanet.name}`}
              />
            )}
            {section === "structure" && (
              <img
                src={currentPlanet.images.internal.replace("./", "/")}
                alt={`${currentPlanet.name}-internal`}
              />
            )}
            {section === "geology" && (
              <>
                <img
                  src={currentPlanet.images.planet.replace("./", "/")}
                  alt={`${currentPlanet.name}`}
                />

                <img
                  src={currentPlanet.images.geology.replace("./", "/")}
                  alt={`${currentPlanet.name}-geology`}
                  className="max-w-[150px] -mt-20"
                />
              </>
            )}
          </div>
          <div className="w-full mt-24 md:mt-32 lg:mt-0 lg:max-w-1/2 md:flex justify-between lg:block">
            <div className="w-full mx-auto md:mx-0 text-center md:text-left max-w-[339px] lg:max-w-[350px] lg:ms-auto">
              <h1>{currentPlanet.name}</h1>
              <p className="text-[14px] mt-4 mb-8 md:mt-6 md:mb-8 lg:mt-6 lg:mb-6">
                {currentPlanet[section].content}
              </p>
              <p className="flex justify-center md:justify-start items-center gap-1">
                <span className="opacity-50">Source :</span>
                <a
                  href={currentPlanet[section].source}
                  className="font-semibold flex items-center gap-2"
                >
                  <span className="opacity-50">Wikipedia</span>
                  <img src="/assets/icon-source.svg" alt="Source" />
                </a>
              </p>
            </div>
            <Actions />
          </div>
        </div>
      </section>

      <Cards cards={cards} />
    </>
  );
}

export default Content;
