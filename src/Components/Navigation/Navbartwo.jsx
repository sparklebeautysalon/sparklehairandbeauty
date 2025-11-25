import React, { useEffect, useRef, useState } from "react";
import MyIcon from "../../Images/logohd.jpg";
import "./Navbartwo.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaChevronDown,
  FaChevronUp,
  FaUserTie,
  FaChalkboardTeacher,
  FaBrain,
} from "react-icons/fa";
import { Divider } from "primereact/divider";
import { Sidebar } from "primereact/sidebar";

function Navbar() {
  const dropdownRef = useRef(null);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenN, setIsOpenN] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 901);
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const shouldAddClass = location.pathname === "/Contact";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 901);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  const handleClickOutside = (evt) => {
    if (dropdownRef.current && !dropdownRef.current.contains(evt.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const togglePanel = (panelKey) => {
    setExpandedPanel((prevKey) => (prevKey === panelKey ? null : panelKey));
  };

  const MobileLink = ({ to, text, onClick }) => (
    <div className="mobile-link-wrapper">
      <NavLink to={to} className="dd-links" onClick={onClick}>
        <b>{text}</b>
      </NavLink>
    </div>
  );

  const CollapsibleSection = ({
    title,
    panelKey,
    expandedPanel,
    togglePanel,
    items,
    onLinkClick,
  }) => (
    <div className="collapsible-section">
      <div className="collapsible-header" onClick={() => togglePanel(panelKey)}>
        <b>{title}</b>{" "}
        {expandedPanel === panelKey ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {expandedPanel === panelKey && (
        <div className="collapsible-content">
          <PanelLinks items={items} onLinkClick={onLinkClick} />
        </div>
      )}
    </div>
  );

  // ---------- Data ---------- //

  // Images Example///
  // const servicesMobile = [
  //   { to: "/services/hair-services", text: "Hair Services", img: hairImg },
  //   {
  //     to: "/services/facial-services",
  //     text: "Facial Services",
  //     img: facialImg,
  //   },
  //   {
  //     to: "/services/waxing-services",
  //     text: "Waxing Services",
  //     img: waxingImg,
  //   },
  //   {
  //     to: "/services/threading-services",
  //     text: "Threading Services",
  //     img: threadingImg,
  //   },
  //   {
  //     to: "/services/tinting-services",
  //     text: "Tinting Services",
  //     img: tintingImg,
  //   },
  //   {
  //     to: "/services/massage-services",
  //     text: "Massage Services",
  //     img: massageImg,
  //   },
  // ];


  // Images Example
  // const ColumnSection = ({ header, items, onLinkClick }) => (
  //   <div className="column">
  //     <div className="column-header">
  //       <strong>{header}</strong>
  //     </div>
  //     {items.map(({ to, text, img }) => (
  //       <NavLink
  //         key={to}
  //         to={to}
  //         className={({ isActive }) =>
  //           isActive ? "dd-links active" : "dd-links"
  //         }
  //         onClick={onLinkClick}>
  //         {img && (
  //           <img
  //             src={img}
  //             alt={text}
  //             style={{
  //               width: "20px",
  //               height: "20px",
  //               marginRight: "8px",
  //               verticalAlign: "middle",
  //               borderRadius: "3px",
  //               objectFit: "cover",
  //             }}
  //           />
  //         )}
  //         {text}
  //       </NavLink>
  //     ))}
  //   </div>
  // );

  const ColumnSection = ({ header, items, isActive, onLinkClick }) => (
    <div className="column">
      <div className="column-header">
        {/* <div className={`column-header ${isActive ? "active-heading" : ""}`}> */}
        <strong>{header}</strong>
      </div>
      {items.map(({ to, text }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? "dd-links active" : "dd-links"
          }
          onClick={onLinkClick}>
          {text}
        </NavLink>
      ))}
    </div>
  );

  const PanelLinks = ({ items, onLinkClick }) => (
    <>
      {items.map(({ to, text }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? "dd-links active" : "dd-links"
          }
          onClick={() => {
            onLinkClick?.();
            if (window.innerWidth < 900) window.scrollTo(0, 0);
          }}>
          {text}
        </NavLink>
      ))}
    </>
  );

  return (
    <nav>
      <Link to="/" onClick={() => setIsSidebarVisible(false)}>
        <img className="my-icon" src={MyIcon} alt="Logo" />
      </Link>

      <ul ref={dropdownRef} style={{ display: isMobile ? "none" : "flex" }}>
        <li className="nav-items">
          <NavLink
            exact="true"
            to="/"
            activeClassName="active"
            onClick={() => setIsSidebarVisible(false)}>
            Home
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/services" onClick={() => setIsSidebarVisible(false)}>
            Services
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/aboutus" onClick={() => setIsSidebarVisible(false)}>
            About Us
          </NavLink>
        </li>
      </ul>

      <div>
        <NavLink
          to="/contactus"
          className={`contactBtn ${shouldAddClass ? "border-right" : ""}`}
          onClick={() => setIsSidebarVisible(false)}>
          Contact Us
        </NavLink>
      </div>

      {/* Hamburger + Sidebar for mobile */}
      {isMobile && (
        <>
          <div className="hamburger">
            <RxHamburgerMenu onClick={() => setIsSidebarVisible(true)} />
          </div>

          <Sidebar
            visible={isSidebarVisible}
            onHide={() => {
              setIsSidebarVisible(false);
              setExpandedPanel(null);
            }}
            position="right"
            style={{ width: "300px" }}>
            <MobileLink
              to="/"
              text="Home"
              onClick={() => setIsSidebarVisible(false)}
            />

            <MobileLink
              to="/services"
              text="Services"
              onClick={() => setIsSidebarVisible(false)}
            />
            <MobileLink
              to="/aboutus"
              text="About Us"
              onClick={() => setIsSidebarVisible(false)}
            />
            <MobileLink
              to="/contactus"
              text="Contact Us"
              onClick={() => setIsSidebarVisible(false)}
            />
          </Sidebar>
        </>
      )}
    </nav>
  );
}

// ---------- Components ---------- //

export default Navbar;
