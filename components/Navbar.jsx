import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = ({ logoSrc, logoAlt, navLinks, contactLink, menuIconSrc, closeIconSrc }) => {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Track open submenu for desktop
  const [openMobileSubMenuIndex, setOpenMobileSubMenuIndex] = useState(null); // Track open submenu for mobile

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
    setOpenMobileSubMenuIndex(null); // Close mobile submenus when menu is closed
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const toggleMobileSubMenu = (index) => {
    setOpenMobileSubMenuIndex(openMobileSubMenuIndex === index ? null : index);
  };

  const toggleTheme = (forceLight = true) => {
    if (forceLight) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      const isDark = document.documentElement.classList.contains('dark');
      document.documentElement.classList.toggle('dark', !isDark);
      localStorage.theme = !isDark ? 'dark' : 'light';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) {
        navRef?.current?.classList?.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinkRef?.current?.classList?.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
      } else {
        navRef?.current?.classList?.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinkRef?.current?.classList?.add('bg-white', 'shadow-sm', 'bg-opacity-50');
      }
    };

    window.addEventListener('scroll', handleScroll);

    toggleTheme(true); // Force light mode on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href="/" className="cursor-pointer mr-14">
          <img src={logoSrc} alt={logoAlt} className="w-28" />
        </Link>

        <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              {link.subMenu ? (
                <button onClick={() => toggleSubMenu(index)} className="focus:outline-none">
                  {link.label}
                </button>
              ) : (
                <Link href={link.href}>
                  {link.label}
                </Link>
              )}
              {link.subMenu && openSubMenuIndex === index && (
                <ul className="absolute left-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-md">
                  {link.subMenu.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subLink.href} className="block px-4 py-2 hover:bg-gray-200">
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {contactLink && (
            <Link href={contactLink.href} className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">
              {contactLink.label} <img src="/assets/arrow-icon.png" alt="Arrow icon" className="w-3" />
            </Link>
          )}

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src={menuIconSrc} alt="Menu icon" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img src={closeIconSrc} alt="Close icon" className="w-5 cursor-pointer" />
          </div>
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.subMenu ? (
                <>
                  <button onClick={() => toggleMobileSubMenu(index)} className="focus:outline-none">
                    {link.label}
                  </button>
                  {openMobileSubMenuIndex === index && (
                    <ul className="ml-4 mt-2">
                      {link.subMenu.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subLink.href} onClick={closeMenu}>
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
