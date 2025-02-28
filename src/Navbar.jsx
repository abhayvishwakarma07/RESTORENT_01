import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 w-full p-0 text-white bg-black shadow-md md:rounded-full md:fixed md:w-4/5 left-30 top-5">
      <div className="container flex items-center justify-around p-4 mx-auto">
        {/* Logo */}
      <h1 className="p-1 font-bold">RESTRO</h1>

        {/* Desktop Menu */}
        <ul className="hidden space-x-6 font-bold md:flex ">
          <li>
            <Link to='/'className="text-white hover:text-yellow-300">Home</Link>
          </li>
          <li>
          <Link to='/food' className="text-white hover:text-yellow-300">Food</Link>
          </li>
          <li>
          <Link to='/about' className="text-white hover:text-yellow-300">About</Link>
          </li>
          <li>
          <Link to='/contect' className="text-white hover:text-yellow-300">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="py-4 space-y-4 font-bold text-center md:hidden">
          <li>
            <Link to='/' className="block text-white hover:text-yellow-500">Home</Link>
          </li>
          <li>
            <Link to='food' className="block text-white hover:text-yellow-500">FOOD</Link>
          </li>
          <li>
            <Link to='/about' className="block text-white hover:text-yellow-500">ABOUT</Link>
          </li>
          <li>
            <Link to='/contect' className="block text-white hover:text-yellow-500">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

