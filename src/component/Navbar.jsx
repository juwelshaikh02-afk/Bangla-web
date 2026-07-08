import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">

        <h1 className="text-3xl font-bold text-[#586168]">
          Bangla <span className="text-[#E30613]">Click</span>
        </h1>

        <div className="flex gap-8 font-medium">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/services">Services</NavLink>

          <NavLink to="/about">About Us</NavLink>

          <NavLink to="/projects">Projects</NavLink>

          <NavLink to="/contact">Contact</NavLink>

        </div>
      </div>
    </nav>
  );
}