import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-center">
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </div>
  );
};

export default Navbar;

