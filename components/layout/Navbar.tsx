"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About us" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ""}`}>
      <div className={styles.logo}>
        <Logo variant="light" />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? styles.active : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className={styles.mobileButtons}>
          <Link href="/contact" className="btn-primary button" onClick={closeMenu}>
            <Icon name="phone" size={14} /> Contact Us
          </Link>
        </li>
      </ul>

      <div className={styles.navButtons}>
        <Link href="/contact" className="btn-primary button">
          <Icon name="phone" size={14} /> Contact Us
        </Link>
      </div>
    </nav>
  );
}


