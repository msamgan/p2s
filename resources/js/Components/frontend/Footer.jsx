import React from 'react'
import paymentMethod from '../../../../public/frontend/assets/images/payments.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 px-6 py-12 text-white md:px-8 lg:px-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col justify-between space-y-8 md:flex-row md:space-y-0">
                {/* payments */}
                <div className="flex w-full flex-shrink-0 justify-center md:w-auto md:justify-start">
                    <img src={paymentMethod} alt="Payment Methods" className="h-10 object-contain" />
                </div>

                {/* Link */}
                <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-2 md:grid-cols-4">
                    {/* Parcel2Ship */}
                    <div>
                        <h4 className="mb-3 font-bold text-green-500">Parcel2Ship</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-green-400 transition">Services</li>
                            <li className="hover:text-green-400 transition">Package Consolidation</li>
                            <li className="hover:text-green-400 transition">Item Consolidation</li>
                            <li className="hover:text-green-400 transition">Buy it for me</li>
                            <li className="hover:text-green-400 transition">Refer a Friend</li>
                            <li className="hover:text-green-400 transition">E-commerce Solutions</li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="mb-3 font-bold text-green-500">Help</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-green-400 transition">Frequently Asked Questions</li>
                            <li className="hover:text-green-400 transition">Prohibited Materials</li>
                            <li className="hover:text-green-400 transition">Shopping Directory</li>
                        </ul>
                    </div>

                    {/* Warehouses */}
                    <div>
                        <h4 className="mb-3 font-bold text-green-500">Warehouses</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-green-400 transition">United States</li>
                            <li className="hover:text-green-400 transition">Turkey</li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="mb-3 font-bold text-green-500">About</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-green-400 transition">Plans & Pricing</li>
                            <li className="hover:text-green-400 transition">How It Works</li>
                            <li className="hover:text-green-400 transition">Why Choose Us</li>
                            <li className="hover:text-green-400 transition">Contact Us</li>
                            <li className="hover:text-green-400 transition">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
