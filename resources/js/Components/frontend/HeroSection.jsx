import React from 'react'
import heroImage from '../../../../public/frontend/assets/images/81bbef4354298fdc0f80e8f0e36a1a838df44382.png'

const HeroSection = () => {
    return (
        <section className="relative min-h-[600px] w-full overflow-hidden bg-[linear-gradient(90deg,_rgba(1,0,252,1)_0%,_rgba(22,184,108,1)_100%)]">
            {/* Text Section - Left half with max-w-7xl constraint */}
            <div className="md:absolute md:left-0 md:top-0 md:z-10 md:h-full md:w-1/2">
                <div className="flex h-full items-center px-6 py-12 text-white md:px-8 lg:px-10">
                    <div className="mx-auto w-full max-w-7xl">
                        <div className="max-w-xl md:ml-auto">
                            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                                Affordable Parcel <br /> Delivery Across the <br /> UAE & Worldwide
                            </h1>
                            <p className="mb-8 text-lg leading-relaxed">Send parcels starting from just AED 9.</p>
                            <button className="rounded-md bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition hover:bg-gray-100">
                                SIGN UP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section - Full width on right side */}
            <div className="h-80 md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
                <img src={heroImage} alt="Courier Delivery" className="h-full w-full object-cover" />
            </div>
        </section>
    )
}

export default HeroSection
