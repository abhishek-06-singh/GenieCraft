import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "../_components/TemplateListSection";
import CopyButton from "./_components/CopyButton";

export interface HISTORY {
  id: number;
  formData: string | null;
  aiResponse: string | null;
  templateSlug: string | null;
  createdBy: string | null;
  createdAt: string | null;
}

async function History() {
  const user = await currentUser();

  let HistoryList: HISTORY[] = [];
  if (user?.primaryEmailAddress?.emailAddress) {
    HistoryList = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(AIOutput.id));
  }

  const GetTemplateName = (slug: string | null) => {
    if (slug === null) return undefined;
    const template: TEMPLATE | undefined = Templates?.find(
      (item) => item.slug == slug
    );
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white h-screen overflow-y-auto custom-scrollbar">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">
        Search your previously generated AI content
      </p>

      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Template
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                AI Response
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Words
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Copy</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {HistoryList.map((item: HISTORY, index: number) => (
              <tr key={index}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 flex justify-left gap-3 items-center">
                  <Image
                    src={
                      GetTemplateName(item?.templateSlug)?.icon ||
                      "/placeholder.png"
                    }
                    width={25}
                    height={25}
                    alt="icon"
                  />
                  {GetTemplateName(item.templateSlug)?.name}
                </td>
                <td className="hidden px-3 py-4 text-xs text-gray-500 sm:table-cell overflow-y-auto h-10">
                  {item?.aiResponse &&
                    item.aiResponse.split(" ").slice(0, 30).join(" ")}
                  {item?.aiResponse &&
                    item.aiResponse.split(" ").length > 30 &&
                    " ..."}
                </td>

                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {item.createdAt}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {item?.aiResponse ? item.aiResponse.length : 0}
                </td>
                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <CopyButton aiResponse={item.aiResponse} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
