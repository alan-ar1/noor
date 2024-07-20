import { useState } from "react";
import PhoneNav from "../phone/PhoneNav";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-full p-3 items-center bg-secondry ">
      {/* <div className="flex max-w-7xl justify-between items-center p-3 bg-secondry m-auto"> */}
      <div className="flex items-center gap-2">
        <Logo />
        <NavBar />
        {/* <PhoneNav /> */}
      </div>
      {/* <Search /> */}
      {/* </div> */}
    </header>
  );
}
