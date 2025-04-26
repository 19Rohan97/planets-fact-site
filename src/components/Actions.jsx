import { NavLink, useParams } from "react-router-dom";

function Actions() {
  const { planet } = useParams();

  return (
    <div className="w-full actions absolute top-[60px] left-0 px-6 py-5 border-b border-b-[rgba(255,255,255,0.20)] flex justify-between bg-[#070724] md:border-b-0 md:static md:max-w-[281px] md:flex-col md:gap-4 md:mt-10 md:px-0 md:py-0 md:flex lg:max-w-[350px] lg:ms-auto ">
      <NavLink
        to={`/${planet}/overview`}
        className={({ isActive }) =>
          isActive
            ? `btn bg-${planet} relative after:content-[""] after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-[4px] bg-${planet}-after md:after:hidden`
            : "btn"
        }
      >
        OVERVIEW
      </NavLink>
      <NavLink
        to={`/${planet}/structure`}
        className={({ isActive }) =>
          isActive
            ? `btn bg-${planet} relative after:content-[""] after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-[4px] bg-${planet}-after md:after:hidden`
            : "btn"
        }
      >
        Internal Structure
      </NavLink>
      <NavLink
        to={`/${planet}/geology`}
        className={({ isActive }) =>
          isActive
            ? `btn bg-${planet} relative after:content-[""] after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-[4px] bg-${planet}-after md:after:hidden`
            : "btn"
        }
      >
        Surface Geology
      </NavLink>
    </div>
  );
}

export default Actions;
