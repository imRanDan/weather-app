import React from 'react'
import { FaMoon } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import SearchBox from './SearchBox';

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
        <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
            <p className="flex items-center justify-center gap-2">
                <h2 className="text-gray-500 text-3xl">Weather App</h2>
                <FaMoon className="text-3xl mt-1 text-blue-400"/>
            </p>

            <section className="flex gap-2 items-center">
                <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer"/>
                <IoLocationSharp className="text-3xl text-gray-900 hover:opacity-80 cursor-pointer" />
                <p className="text-slate-900/80 text-sm"> Hamilton </p>

                <div>
                    <SearchBox/>
                </div>
            </section>
        </div>
    </nav>
  )
}