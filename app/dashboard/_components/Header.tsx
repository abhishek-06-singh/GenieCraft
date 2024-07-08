import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center">
      <h2 className=" p-1 rounded-full text-sm text-black px-2">
        Join Membership just for Rs.299/Month
      </h2>
      <UserButton />
    </div>
  );
}

export default Header;
