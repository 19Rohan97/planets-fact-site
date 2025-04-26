import { NavLink } from "react-router-dom";
import planetData from "../../data/data.json";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav((nav) => !nav);
  }

  return (
    <header className="px-6 py-4 md:pt-8 md:pb-7 md:py-6 border-b border-b-[rgba(255,255,255,0.20)]">
      <div className="container mx-auto flex md:flex-col lg:flex-row gap-10 justify-between items-center">
        <img src="/assets/logo.svg" alt="THE PLANETS" />

        <div
          className={`md:hidden cursor-pointer ${
            nav && "menuActive opacity-25"
          }`}
          onClick={() => handleNav()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </div>

        <nav
          className={`${
            nav
              ? "absolute w-full top-[60px] left-0 bg-[#070724] px-6 pt-[44px] pb-[67px] z-10"
              : "hidden"
          } md:block`}
        >
          <ul className={`flex ${nav && "flex-col"} items-center gap-x-8`}>
            {planetData.map((planet) => (
              <li
                className={`${
                  nav &&
                  "w-full py-5 border-b border-b-[rgba(255,255,255,0.10)] first:pt-0 last:pb-0 last:border-b-0"
                }`}
                key={planet.name}
              >
                <NavLink
                  to={`/${planet.name.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? `navLink active-${planet.name.toLowerCase()} flex items-center justify-between`
                      : "navLink flex items-center justify-between"
                  }
                  onClick={() => nav && handleNav()}
                >
                  <div className={`${nav && "flex items-center gap-6"}`}>
                    <span
                      className={`${
                        nav
                          ? `block w-5 h-5 rounded-full bg-${planet.name.toLowerCase()}`
                          : "hidden"
                      }`}
                    ></span>
                    {planet.name.toLowerCase()}
                  </div>

                  {nav && <img src="/assets/icon-chevron.svg" alt="Right" />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
