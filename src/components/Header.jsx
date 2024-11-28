import React, { useState, useEffect } from "react";
import logo from "../assets/images/logoToReal.png";
import BookaCallButton from "./BookACallButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRedirect = () => {
    window.open("https://calendly.com/d/crkr-jbr-n53/one-off-meeting", "_blank");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the menu if the overlay is clicked
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center py-8 h-auto">
      <a href="/">
        <img src={logo} alt="" className="w-24" />
      </a>
      <ul className="hidden lg:flex items-center gap-12 text-lg font-medium text-darkBlue">
        <li className="hover:cursor-pointer">Services</li>
        <li className="hover:cursor-pointer">Who we are</li>
        <li className="hover:cursor-pointer">Projects</li>
        <li className="hover:cursor-pointer">Pricing</li>
        <li className="hover:cursor-pointer">FAQ</li>
      </ul>

      <BookaCallButton
        className="hidden lg:flex"
        color="blue"
        onClick={handleRedirect}
      >
        Book a call
      </BookaCallButton>

      {/* Hamburger Icon for Mobile (Visible only on small screens) */}
      <div
        className="lg:hidden hover:cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <box-icon name="menu-alt-right" color="#041136"></box-icon>
      </div>

      {/* Overlay to disable content behind the drawer */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Drawer Menu Mobile (Visible when 'isMenuOpen' is true) */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] lg:hidden
          bg-trWhite shadow-lg flex flex-col p-6 
          items-start gap-6 font-medium text-base 
          transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0 opacity-100 z-20" : "-translate-x-full opacity-0"}
        `}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        
          <li className="list-none hover:cursor-pointer text-darkBlue">Services</li>
          <li className="list-none hover:cursor-pointer text-darkBlue">Who we are</li>
          <li className="list-none hover:cursor-pointer text-darkBlue">Projects</li>
          <li className="list-none hover:cursor-pointer text-darkBlue">Pricing</li>
          <li className="list-none hover:cursor-pointer text-darkBlue">FAQ</li>
        

        {/* Mobile Book a Call Button */}
        <BookaCallButton
          className="w-full"
          color="blue"
          onClick={handleRedirect}
        >
          Book a call
        </BookaCallButton>
      </div>
    </header>
  );
};

export default Header;
