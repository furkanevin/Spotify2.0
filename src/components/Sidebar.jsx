import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ">
    {links.map((item) => (
      <NavLink
        to={item.to}
        key={item.name}
        className="flex flex-row justify-start items-center py-2 my-8 text-sm font-medium text-gray-400 hover:bg-cyan-400 hover:text-white rounded-md "
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt={logo} className="w-full object-contain h-14" />
        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;
