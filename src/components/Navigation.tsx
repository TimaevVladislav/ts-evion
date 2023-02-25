import React from 'react'
import {Link} from "react-router-dom"

import logo from "../img/logo.svg"


export default function Navigation() {
    return (
        <header className="bg-[#0D0D0D] h-[93px]">
            <nav className="mx-auto flex items-center justify-between lg:px-8">
                <img src={logo} alt="logo" />
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <ul className="flex py-4 px-4">
                        <li className="p-[30px] text-white hover:text-[#FCFE00]">
                            <Link to="/">Home</Link>
                        </li>
                        <li  className="p-[30px] text-white hover:text-[#FCFE00]">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li  className="p-[30px] text-white hover:text-[#FCFE00]">
                            <Link to="/services">Services</Link>
                        </li>
                        <li  className="p-[30px] text-white hover:text-[#FCFE00]">
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li  className="p-[30px] text-white hover:text-[#FCFE00]">
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li  className="p-[30px] text-white hover:text-[#FCFE00]">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}