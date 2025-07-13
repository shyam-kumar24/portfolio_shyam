"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer inline-block relative transition-all
        ${
          activeLink === item.id
            ? "text-green-600 font-bold border-b-2 border-green-600"
            : "text-gray-800 hover:text-green-600"
        }
      `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          {/* Logo */}
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-lg text-green-600">
              <div className="w-10 h-10 flex justify-center items-center p-3 rounded-md bg-green-600">
                <span className="text-white text-xl font-bold">P</span>
              </div>
              ortfolio
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>

          {/* Contact Button */}
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-2 px-5 border-2 border-green-600 bg-white text-black font-semibold rounded-md text-sm tracking-wide hover:shadow-lg transition-all"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-md bg-white">
        <ul className="flex justify-between items-center overflow-x-auto whitespace-nowrap text-black py-2">
          <CreateMenus
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            getMenuItems={menuItems}
          />
        </ul>
      </nav>
    </>
  );
}
