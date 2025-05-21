import React, { useState } from 'react'
import logo from '../../../../public/frontend/assets/images/logo.jpeg'
import { Menu, X } from 'lucide-react'
import { Link } from '@inertiajs/react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full bg-white shadow-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-10">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Parcel2Ship Logo" className="h-14 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden gap-8 font-medium text-gray-700 md:flex lg:gap-12">
                    <li>
                        <Link to="/business" className="text-base font-semibold transition hover:text-blue-700">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/getAquote" className="text-base font-semibold transition hover:text-blue-700">
                            Get a Quote
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/rates-and-services"
                            className="text-base font-semibold transition hover:text-blue-700"
                        >
                            Rates & Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/tracking" className="text-base font-semibold transition hover:text-blue-700">
                            Track a Parcel
                        </Link>
                    </li>
                </ul>

                {/*  Buttons */}
                <div className="hidden items-center space-x-6 md:flex">
                    <Link to="/login" className="font-semibold text-blue-700 transition hover:text-blue-800">
                        SIGN IN
                    </Link>

                    <Link
                        to="/signup"
                        className="rounded-md bg-blue-700 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-blue-800"
                    >
                        SIGN UP
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="text-blue-700 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="bg-white px-6 py-4 shadow-md md:hidden">
                    <ul className="mb-6 flex flex-col gap-4 font-medium text-gray-700">
                        <li>
                            <Link
                                to="/business"
                                className="block py-2 text-base font-semibold transition hover:text-blue-700"
                            >
                                Business
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/getAquote"
                                className="block py-2 text-base font-semibold transition hover:text-blue-700"
                            >
                                Get a Quote
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/rates-and-services"
                                className="block py-2 text-base font-semibold transition hover:text-blue-700"
                            >
                                Rates & Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tracking"
                                className="block py-2 text-base font-semibold transition hover:text-blue-700"
                            >
                                Track a Parcel
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-col space-y-4">
                        <Link to="/login" className="font-semibold text-blue-700 transition hover:text-blue-800">
                            SIGN IN
                        </Link>
                        <Link
                            to="/signup"
                            className="rounded-md bg-blue-700 px-4 py-2 text-center font-semibold text-white shadow-sm transition hover:bg-blue-800"
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
