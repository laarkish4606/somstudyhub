import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/graduation1.png"

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkStyle =
    "relative text-gray-700 hover:text-indigo-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">

          <div className="flex items-center gap-2">
          <img src={logo} className="w-9 h-9" alt="SomStudyHub logo" />
          <h1 className="text-2xl font-normal bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent tracking-wide">
            SomStudyHub
          </h1>
</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-8 text-base font-medium">
              <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
              <li><NavLink to="/grade6" className={linkStyle}>Grade 6</NavLink></li>
              <li><NavLink to="/grade8" className={linkStyle}>Grade 8</NavLink></li>
              <li><NavLink to="/entranceexam" className={linkStyle}>Entrance Exam</NavLink></li>
              <li><NavLink to="/developer" className={linkStyle}>Developers</NavLink></li>
              <li><NavLink to="/contact" className={linkStyle}>Contact</NavLink></li>
              <li><NavLink to="/manage" className={linkStyle}>Manage</NavLink></li>
              <li>
                <NavLink
                  to="/login"
                  className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* LEFT SIDE MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col items-start space-y-5 py-10 px-6 text-gray-700 font-medium">
          <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/grade6">Grade 6</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/grade8">Grade 8</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/entranceexam">Entrance Exam</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/developer">Developers</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/manage">Manage</Link></li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              to="/login"
              className="px-6 py-2 bg-indigo-600 text-white rounded-full"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;