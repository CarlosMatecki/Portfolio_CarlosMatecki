
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="logo">
                        <h2>Carlos Matecki</h2>
                    </Link>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <Link
                            to="/"
                            className={`nav-link ${isActive('/') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            to="/project"
                            className={`nav-link ${isActive('/project') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>

                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Let's Connect</h3>
                            <div className="social-links">
                                <a href="https://github.com/carcodee" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="mailto:carlos.matecki@example.com">Email</a>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <div className="footer-links">
                                <Link to="/about">About</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/project">Projects</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Carlos Matecki. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
