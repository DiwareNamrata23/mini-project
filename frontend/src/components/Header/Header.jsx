import React, { useEffect, useState } from "react";
import styles from "./Header.module.css"; // Import the CSS Module
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const { isSignedIn } = useUser();
  const [hasRedirected, setHasRedirected] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Check if the user has just signed in
    if (isSignedIn && !hasRedirected) {
      setHasRedirected(true); // Mark that we've redirected
      navigate("/"); // Redirect to home route
    }
  }, [isSignedIn, hasRedirected, navigate]); // Run effect when isSignedIn changes

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" className={styles.finNews} onClick={handleLinkClick}>
            <span className="poppins">
              Market<span style={{ color: "#FE00E6" }}> Maveric</span>
            </span>
          </Link>
        </div>

        {/* Menu Toggle Button for Mobile */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link to="/blogs" onClick={handleLinkClick}>
            My Notes
          </Link>
          <Link to="/myfeed" onClick={handleLinkClick}>
            My Learnings
          </Link>
          <Link to="/news" onClick={handleLinkClick}>
            News
          </Link>
          <Link to="/prediction" onClick={handleLinkClick}>
            Prediction
          </Link>
          <Link to="/login" onClick={handleLinkClick}>
            {isSignedIn ? <UserButton /> : "Login"}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
