import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { Link } from "react-router-dom";

const NavLinks = () => (
  <div className="mt-10">
    {/* {links.map((item) => (
      <NavLink
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        to={item.to}
        key={item.name}
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))} */}

    <div className="flex flex-col">
      <div className="flex flex-row justify-start items-center mb-6 text-sm font-medium text-gray-400 hover:text-cyan-400">
        <HiOutlineHome className="w-6 h-6 mr-2" />
        <NavLink to="/" onClick={() => handleClick && handleClick()}>
          Discover
        </NavLink>
      </div>

      <div className="flex flex-row justify-start items-center mb-6 text-sm font-medium text-gray-400 hover:text-cyan-400">
        <HiOutlinePhotograph className="w-6 h-6 mr-2" />
        <NavLink to="/around-you" onClick={() => handleClick && handleClick()}>
          Around You
        </NavLink>
      </div>

      <div className="flex flex-row justify-start items-center mb-6 text-sm font-medium text-gray-400 hover:text-cyan-400">
        <HiOutlineUserGroup className="w-6 h-6 mr-2" />
        <NavLink to="/top-artists" onClick={() => handleClick && handleClick()}>
          Top Artists
        </NavLink>
      </div>

      <div className="flex flex-row justify-start items-center mb-6 text-sm font-medium text-gray-400 hover:text-cyan-400">
        <HiOutlineHashtag className="w-6 h-6 mr-2" />
        <NavLink to="/top-charts" onClick={() => handleClick && handleClick()}>
          Top Charts
        </NavLink>
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 p-4 bg-[#191624]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        </Link>
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3 z-50">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2 z-50"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-50 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "left-[100%]"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
