import React from 'react'
import paymentMethod from '../../../../public/frontend/assets/images/payments.png'

const Footer = () => {
    return (
        <footer className="bg-[#1c1c1c] px-6 py-10 text-white md:px-20">
            <div className="mx-auto flex w-full max-w-screen-xl flex-col justify-between md:flex-row">
                {/* payments */}
                <div className="flex w-full flex-shrink-0 justify-center md:w-auto md:justify-start">
                    <img src={paymentMethod} alt="Payment Methods" className="h-10 object-contain" />
                </div>

                {/* Link */}
                <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-2 md:grid-cols-4">
                    {/* Parcel2Ship */}
                    <div>
                        <h4 className="mb-2 font-bold text-green-500">Parcel2Ship</h4>
                        <ul className="space-y-1">
                            <li>Services</li>
                            <li>Package Consolidation</li>
                            <li>Item Consolidation</li>
                            <li>Buy it for me</li>
                            <li>Refer a Friend</li>
                            <li>E-commerce Solutions</li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="mb-2 font-bold text-green-500">Help</h4>
                        <ul className="space-y-1">
                            <li>Frequently Asked Questions</li>
                            <li>Prohibited Materials</li>
                            <li>Shopping Directory</li>
                        </ul>
                    </div>

                    {/* Warehouses */}
                    <div>
                        <h4 className="mb-2 font-bold text-green-500">Warehouses</h4>
                        <ul className="space-y-1">
                            <li>United States</li>
                            <li>Turkey</li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="mb-2 font-bold text-green-500">About</h4>
                        <ul className="space-y-1">
                            <li>Plans & Pricing</li>
                            <li>How It Works</li>
                            <li>Why Choose Us</li>
                            <li>Contact Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
