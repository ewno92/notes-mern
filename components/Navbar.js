import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a> link 1</a>
      </Link>
      <Link href="/">
        <a> link 2</a>
      </Link>
    </nav>
  );
};

export default Navbar;
