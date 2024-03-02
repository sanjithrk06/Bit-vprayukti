import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { motion, AnimatePresence } from "framer-motion";

import { menu, close } from "../../assets/images";
import flogo from "../../assets/images/flogo.png"

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  
  const { width } = useWindowSize();

  const handleScroll = () => {
    if (window.scrollY >= (window.innerHeight/2)) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        { (width < 900) ? (
            <NavbarMobile />
            ) : (
                isScrolling ? (
                <NavbarScroll isScrolling={isScrolling} />
                ) : (
                <NavbarFixed />
                )
            )
        }
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
    const [active, setActive] = useState("");

    const navLinks = [
      {
        id: "/",
        title: "Home",
      },
      {
        id: "/#about",
        title: "About",
      },
      {
        id: "/#events",
        title: "Events",
      },
      {
        id: "/committee",
        title: "Committee",
      },
      {
        id: "/accommodation",
        title: "Accommodation",
      },
      {
        id: "/#contact",
        title: "Contact",
      },
    ];

  return (
    <nav className="absolute z-10 flex w-full justify-center items-center px-4 py-2 top-4">

      <ul className="flex items-center p-2 px-8 justify-center text-accent  bg-black rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.5]">
        {navLinks.map((nav) => (
        <li
            key={nav.id}
            className={`px-6 text-base font-medium hover:text-white ${
                active === nav.title ? "text-white" : "text-accent"
                }`}
            onClick={() => setActive(nav.title)}
        >
            <a href={nav.id}>{nav.title}</a>
        </li>
        ))}
      </ul>

    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  const [active, setActive] = useState("");

  const navLinks = [
    {
      id: "/#",
      title: "Home",
    },
    {
      id: "/#about",
      title: "About",
    },
    {
      id: "/#events",
      title: "Events",
    },
    {
      id: "/committee",
      title: "Committee",
    },
    {
      id: "/accommodation",
      title: "Accommodation",
    },
    {
      id: "/#contact",
      title: "Contact",
    },
  ];

  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-10 flex justify-between px-4 py-2 rounded-full ts-bg left-1/2 top-5 bg-primary bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.5] border border-accent"
    >
      <ul className="flex items-center">
        {navLinks.map((nav) => (
        <li
            key={nav.id}
            className={`px-6 text-accent hover:text-white text-sm font-medium ${
                active === nav.title ? "text-white" : "text-accent"
                }`}
            onClick={() => setActive(nav.title)}
        >
            <a href={nav.id}>{nav.title}</a>
        </li>
        ))}
      </ul>
    </motion.nav>
  );
}


function NavbarMobile() {
  const [offset, setOffset] = useState(0);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    document.querySelector('.classy-navbar .classy-menu').classList.remove('active');
  };

  return (
    <header
      className={`header-area ${
        offset > 10 && 'stick'
      } fixed w-full z-[999] bg-[#000000cc] duration-500 top-0 block`}
    >
      <div className="classy-nav-container breakpoint-off relative bg-transparent">
        <div className="container max-w-6xl mx-auto px-5 md:px-2">
          <nav
            className="classy-navbar duration-500 h-24 p-0 w-full flex items-center justify-between"
            id="conferNav"
          >
            <Link
              className="nav-brand text-2xl font-medium text-yellow-100 inline-block mr-7 uppercase"
              to="/"
            >
              <img
                className="w-52"
                src={flogo}
                alt="logo"
              />
            </Link>
            <div
              onClick={(e) => {
                document.querySelector('.classy-navbar .classy-menu').classList.toggle('active');
              }}
              className="classy-navbar-toggler md:hidden"
            >
              <img src={menu} alt="menu" className="inline-block text-white text-3xl" />
            </div>
            <div className="classy-menu bg-primary">
              <img
                src={close}
                alt="close"
                onClick={(e) => {
                  document.querySelector('.classy-navbar .classy-menu').classList.toggle('active');
                }}
                className="inline-block absolute top-5 right-5 z-20 text-white stroke-none text-3xl md:hidden"
              />
              <div className="classynav flex items-center">
                <ul id="nav" className="inline-block">
                  <li
                    className={activeLink === 'home' ? 'active' : ''}
                    onClick={() => handleLinkClick('home')}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={activeLink === 'events' ? 'active' : ''}
                    onClick={() => handleLinkClick('events')}
                  >
                    <a href="/#events">Events</a>
                  </li>
                  <li
                    className={activeLink === 'committee' ? 'active' : ''}
                    onClick={() => handleLinkClick('committee')}
                  >
                    <a href="/committee">Committee</a>
                  </li>
                  <li
                    className={activeLink === 'accommodation' ? 'active' : ''}
                    onClick={() => handleLinkClick('accommodation')}
                  >
                    <a href="/accommodation">Accommodation</a>
                  </li>
                  <li
                    className={activeLink === 'contact' ? 'active' : ''}
                    onClick={() => handleLinkClick('contact')}
                  >
                    <a href="/#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};