import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { useState } from 'react';

function NavBar(props) {

  const [active, setActive] = useState(false);

  function onClick() {
    setActive(!active)
  }

  return (
    <header className="bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="w-14">
          <img src={Logo} className="w-full h-auto" alt="Main Logo" />
        </div>

        <div
          onClick={onClick}
          className={`
            md:hidden uppercase cursor-pointer hover:text-gray-500
          `}
        >
          Menu
        </div>

        <nav
          className={`
            ${!active && "hidden"}
            absolute flex flex-col bg-white top-full w-full left-0 z-20
            md:static md:w-auto md:flex-row md:flex font-mono
          `}
        >
          <ul className="md:flex-row md:flex">
            <li className="list-none md:mr-5">
              <Link
                to="/"
                className="flex w-full text-base uppercase hover:text-gray-500 cursor-pointer pt-2.5 px-2.5"
              >
                Home
              </Link>
            </li>

            <li className="list-none md:mr-5">
              <Link
                to="/about"
                className="flex w-full text-base uppercase hover:text-gray-500 cursor-pointer pt-2.5 px-2.5"
              >
                About
              </Link>
            </li>

            <li>
              <button className="flex w-full text-base uppercase hover:bg-red-400 cursor-pointer mt-1.5 py-1 px-2.5 bg-red-300 rounded-md text-center">
                connect wallet
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default NavBar;