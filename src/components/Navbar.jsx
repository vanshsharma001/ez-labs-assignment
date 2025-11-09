import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import mailIcon from "../assets/mail.svg";
import vfilmLogo from "../assets/v-films-logo.svg";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    setMobileOpen(false);
    navigate("/contact");
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-16 py-6">
        <div className="flex items-center justify-between w-full">
          <img
            src={vfilmLogo}
            alt="V-Films Logo"
            className="md:w-32 w-19 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => navigate("/")}
          />

          <div className="flex items-center justify-end flex-1 gap-6 md:gap-8">
            {navOpen && (
              <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
                <a href="#" className="text-black hover:text-[#F15D2B] transition">Services</a>
                <a href="#" className="text-black hover:text-[#F15D2B] transition">Their Stories</a>
                <a href="#" className="text-black hover:text-[#F15D2B] transition">Our Story</a>
                <a href="#" className="text-black hover:text-[#F15D2B] transition">Varnan</a>

                <button
                  onClick={handleContactClick}
                  className="flex items-center gap-2 bg-[#F15D2B] text-white text-[18px] px-5 py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:bg-[#ff6b3a] transition-all duration-300 whitespace-nowrap"
                >
                  <img src={mailIcon} alt="Mail Icon" className="w-5 h-5" />
                  Let’s Talk
                </button>
              </nav>
            )}

            <button
              className="hidden md:flex items-center gap-2 text-white z-50"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <img
                src={navOpen ? closeIcon : menuIcon}
                alt="Menu"
                className={`h-7 w-7 transition-transform duration-300 ${navOpen ? "rotate-180 scale-110" : ""}`}
              />
            </button>

            <button
              className="flex md:hidden items-center gap-2 text-white z-50"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <img
                src={mobileOpen ? closeIcon : menuIcon}
                alt="Mobile Menu"
                className={`h-8 w-8 transition-transform duration-300 ${mobileOpen ? "rotate-180 scale-110" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#f15c2bcc] backdrop-blur-xl transform transition-transform duration-300 z-40 flex flex-col items-center justify-center space-y-8 text-xl font-medium md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {["Services", "Their Stories", "Our Story", "Varnan"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-[#F15D2B] text-white font-halant"
            onClick={() => setMobileOpen(false)}
          >
            {item}
          </a>
        ))}

        <button
          onClick={handleContactClick}
          className="flex items-center gap-2 bg-[#F15D2B] text-white text-[18px] px-5 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:bg-[#ff6b3a] transition-all duration-300"
        >
          <img src={mailIcon} alt="Mail Icon" className="w-6 h-6" />
          Let’s Talk
        </button>
      </div>
    </>
  );
}
