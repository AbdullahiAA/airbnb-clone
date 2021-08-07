import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function resetInput() {
    setSearchInput("");
  }

  function handleSearch() {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });

    resetInput();
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 gap-4 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo*/}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div className="relative flex items-center border-2 rounded-full py-2 px-2 md:px-0 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className="bg-transparent outline-none flex-grow px-2 md:pr-0 md:pl-5 text-sm text-gray-600 placeholder-gray-400 w-full"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline md:text-sm lg:text-base cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {/* DateRangePicker - Only Show when the search field is not empty */}
      {searchInput && (
        <div className="flex flex-col mx-auto col-span-3 border border-red-400 max-w-full overflow-hidden box-border">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            className="w-full overflow-auto box-border"
          />

          {/* Top Row */}
          <div className="flex justify-between border-b">
            <h2 className="text-2xl font-semibold ml-1">Number of Guests</h2>
            <div className="flex items-center gap-2">
              <UsersIcon className="h-5" />
              <input
                type="number"
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                min="1"
                className="w-12 text-red-400 text-lg outline-none"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex w-full">
            <button
              onClick={resetInput}
              className="flex-grow py-4 text-gray-500"
            >
              Cancel
            </button>

            <button
              onClick={handleSearch}
              className="flex-grow py-4 text-red-400"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
