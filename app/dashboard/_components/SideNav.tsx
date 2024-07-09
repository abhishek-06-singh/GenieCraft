"use client";
import { FileClock, Home, Settings, WalletCards, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },

    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
    {
      name: "Creator",
      icon: User,
      path: "/dashboard/creator",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/mainlogo.png"} alt="logo" width={180} height={300} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path}>
            <div
              className={`flex gap-2 mb-2 p-3
                    hover:bg-pink-500/20 hover:text-black rounded-lg
                    cursor-pointer items-center
                    ${path == menu.path && "bg-pink-500/30 text-black"}
                    `}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        {/* <UsageTrack /> */}
      </div>
    </div>
  );
}

export default SideNav;
