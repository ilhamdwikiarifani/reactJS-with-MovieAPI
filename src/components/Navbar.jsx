import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, SetNav] = useState(true);

  const navigate = useNavigate();

  const Open = () => {
    SetNav(!nav);
  };

  return (
    <div className="bg-zinc-900">
      <div className="max-w-[1240px] mx-auto h-[90px] flex items-center border-b border-zinc-600">
        <div className="text-white flex items-center justify-between w-full md:px-10 px-3">
          <div className="leading-none">
            <p className="font-bold text-3xl">Nekoserve.</p>
            <p className="text-sm text-zinc-400">@nekoserve</p>
          </div>
          <div>
            <div>
              <button className="block  md:hidden" onClick={Open}>
                {!nav ? (
                  <FontAwesomeIcon icon={faXmark} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </button>
            </div>
            <div className="hidden  md:block ">
              <ul className="flex gap-3 ">
                <li
                  className="px-2 cursor-pointer hover:scale-95 transition-all "
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="px-2 cursor-pointer hover:scale-95 transition-all"
                  onClick={() => navigate("/works")}
                >
                  Works
                </li>
              </ul>
            </div>
            <div>
              <ul
                className={
                  !nav
                    ? `block fixed top-0 left-0 bg-zinc-800 h-full w-[300px] ease-in-out duration-500 px-8 pt-24 z-30`
                    : `fixed left-[-100%]`
                }
              >
                <div
                  className="leading-none mb-5
              "
                >
                  <p className="font-bold text-3xl">Nekoserve.</p>
                  <p className="text-sm pt-[-2px] text-zinc-400">@nekoserve</p>
                </div>
                <li
                  className="text-sm pb-2 hover:scale-95 hover:font-bold transition-all"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="text-sm pb-2 hover:scale-95 hover:font-bold  transition-all"
                  onClick={() => navigate("/works")}
                >
                  Works
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
