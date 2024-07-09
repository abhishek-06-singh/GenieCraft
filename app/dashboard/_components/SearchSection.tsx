import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8  ">
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-white to-gray-50 mt-10 px-6 py-20  sm:rounded-3xl sm:px-24 xl:py-20">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Browse All Templates here
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-800">
          What would you like to create today?
        </p>
        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
          <Search className="text-primary mt-2" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className=" bg-indigo-500/10 p-2 w-full outline-none text-black rounded-full"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchSection;
