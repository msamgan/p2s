import React from 'react'
import heroImage from '../../../../public/frontend/assets/images/81bbef4354298fdc0f80e8f0e36a1a838df44382.png'

const HeroSection = () => {
    return (
        <section className="relative flex min-h-[600px] w-full flex-col-reverse overflow-hidden bg-[linear-gradient(90deg,_rgba(1,0,252,1)_0%,_rgba(22,184,108,1)_100%)] md:flex-row">
            {/* Text Section */}
            <div className="flex w-full items-center justify-center px-6 py-12 text-white md:w-1/2 md:px-10 lg:px-16">
                <div className="max-w-xl">
                    <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                        Affordable Parcel <br /> Delivery Across the <br /> UAE & Worldwide
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed">Send parcels starting from just AED 9.</p>
                    <button className="rounded-md bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition hover:bg-gray-100">
                        SIGN UP NOW
                    </button>
                </div>
            </div>

            {/* Image Section with optional rounded edge */}
            <div className="relative h-80 w-full md:h-auto md:w-1/2">
                <img src={heroImage} alt="Courier Delivery" className="absolute inset-0 h-full w-full object-cover" />
            </div>
        </section>
    )
}

export default HeroSection
