import React from 'react'
import delivery from '../../../../public/frontend/assets/images/81bbef4354298fdc0f80e8f0e36a1a838df44382.png'

const ExpressDelivery = () => {
    return (
        <section className="relative min-h-[600px] bg-gradient-to-r from-[#0100FC] to-[#16B86C] text-white">
            {/* Text Section - Left half with max-w-7xl constraint */}
            <div className="md:absolute md:left-0 md:top-0 md:z-10 md:h-full md:w-1/2">
                <div className="flex h-full items-center px-6 py-12 md:px-8 lg:px-10">
                    <div className="mx-auto w-full max-w-7xl">
                        <div className="max-w-xl md:ml-auto">
                            <h2 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                                Express Delivery <br /> Made Easy
                            </h2>
                            <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl">
                                Do you need your parcel to arrive the next day? Want it there before 9am? Or even this
                                very same day?
                            </p>
                            <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl">
                                We specialise in express delivery. Choose same day delivery with CitySprint or next day
                                delivery is available with many of our UK couriers and starts from just £1.99 exc VAT!
                            </p>
                            <p className="text-base leading-relaxed sm:text-lg md:text-xl">
                                And if your parcel is of the highest importance, our signed for delivery options offer
                                that added layer of protection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section - Full width on right side */}
            <div className="h-80 md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
                <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${delivery})` }}
                />
            </div>
        </section>
    )
}

export default ExpressDelivery
