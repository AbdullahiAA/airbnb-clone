import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 gap-4 bg-white shadow-md p-5 md:px-10">
            {/* Left - Logo*/}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle - Search */}
            <div className="relative flex items-center border-2 rounded-full py-2 px-2 md:px-0 md:shadow-sm">
                <input type="text" placeholder="Start your search" className="bg-transparent outline-none flex-grow px-2 md:pr-0 md:pl-5 text-sm text-gray-600 placeholder-gray-400 w-full" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 mx-2" />

            </div>

            {/* Right */}
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline md:text-sm lg:text-base cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header
