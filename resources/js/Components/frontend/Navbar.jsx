import React, { useState } from 'react'
import logo from '../../../../public/frontend/assets/images/logo.jpeg'
import { Menu, X } from 'lucide-react'
import { Link } from '@inertiajs/react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full bg-white shadow-md">
            <div className="mx-auto flex h-[78px] max-w-[1700px] items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Parcel2Ship Logo" className="h-[61px] w-[94px] object-contain" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden gap-[50px] font-medium text-gray-700 md:flex lg:gap-[112px]">
                    <li>
                        <Link to="/business" className="text-[16px] font-bold">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/getAquote" className="text-[16px] font-bold">
                            Get a Quote
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-[16px] font-bold">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/tracking" className="text-[16px] font-bold">
                            Track a Parcel
                        </Link>
                    </li>
                </ul>

                {/*  Buttons */}
                <div className="hidden items-center space-x-[45px] md:flex">
                    <Link to="/login" className="font-bold text-[rgba(1,0,252,1)]">
                        SIGN IN
                    </Link>

                    <Link to="/signup" className="rounded-md bg-[rgba(1,0,252,1)] px-4 py-2 font-semibold text-white">
                        SIGN UP
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="text-blue-700 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="bg-white px-4 pb-6 shadow-md md:hidden">
                    <ul className="mt-4 flex flex-col gap-4 font-medium text-gray-700">
                        <li>
                            <Link to="/business">Business</Link>
                        </li>
                        <li>
                            <Link to="/getAquote">Get a Quote</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/tracking">Track a Parcel</Link>
                        </li>
                    </ul>
                    <div className="mt-6 flex flex-col space-y-3">
                        <Link to="/login" className="font-bold text-blue-600">
                            SIGN IN
                        </Link>
                        <Link
                            to="/signup"
                            className="rounded-md bg-blue-700 px-4 py-2 text-center font-semibold text-white transition hover:bg-blue-800"
                        >
                            SIGN UP
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
