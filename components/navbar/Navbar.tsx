﻿import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed w-full bg-secondary z-10 shadow-sm">
      <div className="py-4 border-b-2">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
