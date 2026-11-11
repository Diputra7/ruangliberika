 
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import liberikaLogo from "../assets/img/logo.png";
import fiandaLogo from "../assets/img/fianda.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/ruangliberika/";

export default function Navbar({ mobileMenu, setMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Menu", href: "#menu", id: "menu" },
    { label: "Story", href: "#story", id: "story" },
    { label: "About", href: "#about", id: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id) => {
    setActiveSection(id);
    setMobileMenu(false);
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#D8C5AE] bg-[#F7F0E6]/95 shadow-[0_5px_20px_rgba(59,40,27,0.08)] backdrop-blur-xl"
            : "border-b border-[#D8C5AE]/70 bg-[#F7F0E6]"
        }`}
      >
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-10">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => handleNavigation("home")}
            aria-label="Liberika x Fianda"
            className="group flex shrink-0 items-center gap-2 sm:gap-3"
          >
            <img
              src={liberikaLogo}
              alt="Logo Liberika"
              className="h-10 w-10 object-contain transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
            />

            <span className="font-heading text-xl font-semibold text-[#805638]">
              ×
            </span>

            <img
              src={fiandaLogo}
              alt="Logo Fianda Coffee Space and Roastery"
              className="h-10 w-10 object-contain mix-blend-multiply transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-2 md:flex lg:gap-3">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavigation(item.id)}
                className={`rounded-full px-5 py-2.5 text-[12px] font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-[#E9D9C5] text-[#4A2F20]"
                    : "text-[#806B57] hover:bg-[#E9D9C5]/70 hover:text-[#4A2F20]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">

            {/* DESKTOP ORDER NOW */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenu(false)}
              className="group hidden items-center gap-2 rounded-full bg-[#4A2F20] px-5 py-3 text-[10px] font-semibold tracking-[0.12em] text-[#FFF8EE] transition duration-300 hover:bg-[#704A30] sm:inline-flex"
            >
              ORDER NOW

              <FaArrowRight
                size={11}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* MOBILE ORDER NOW */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenu(false)}
              className="rounded-full bg-[#4A2F20] px-4 py-2.5 text-[9px] font-semibold tracking-wider text-[#FFF8EE] transition hover:bg-[#704A30] sm:hidden"
            >
              ORDER NOW
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu((previous) => !previous)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#604A37] transition hover:bg-[#E9D9C5] md:hidden"
            >
              {mobileMenu ? (
                <FaTimes size={18} />
              ) : (
                <FaBars size={18} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            mobileMenu
              ? "grid-rows-[1fr] border-t border-[#D8C5AE] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="bg-[#F7F0E6] px-5 pb-5 pt-4">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavigation(item.id)}
                    className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                      activeSection === item.id
                        ? "bg-[#E9D9C5] text-[#4A2F20]"
                        : "text-[#806B57] hover:bg-[#E9D9C5]/70 hover:text-[#4A2F20]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* SPACE FOR FIXED NAVBAR */}
      <div className="h-[78px]" />
    </>
  );
}
