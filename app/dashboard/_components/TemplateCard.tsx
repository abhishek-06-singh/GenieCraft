import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div
        className="p-5 shadow-md  border bg-white 
      flex flex-col gap-3  cursor-pointer h-full hover:scale-105 transition-all rounded-3xl"
      >
        <Image src={item.icon} alt="icon" width={30} height={30} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
