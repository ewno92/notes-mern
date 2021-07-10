import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/">
        <a> link</a>
      </Link>
      <Link href="/new">
        <a>create new</a>
      </Link>
    </nav>
  );
};

export default Navbar;
