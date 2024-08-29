import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <h1>Career Advisor</h1>
                    <nav>
                        <ul>
                            <li><a href="/main">Home</a></li>
                            <li><a href="/search">Job Search</a></li>
                            <li><a href="/list">Job Listing</a></li>
                            <li><a href="/video">Video Training</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>)
}

export default Header