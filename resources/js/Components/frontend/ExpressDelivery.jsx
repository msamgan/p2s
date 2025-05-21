import React from 'react'
import delivery from '../../../../public/frontend/assets/images/81bbef4354298fdc0f80e8f0e36a1a838df44382.png'

const ExpressDelivery = () => {
    return (
        <section className="flex min-h-[600px] flex-col bg-gradient-to-r from-[#0100FC] to-[#16B86C] text-white md:flex-row">
            <div className="mx-auto flex w-full max-w-7xl flex-col md:flex-row">
                {/* Text Section */}
                <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-8 lg:px-10">
                    <h2 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                        Express Delivery <br /> Made Easy
                    </h2>
                    <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl">
                        Do you need your parcel to arrive the next day? Want it there before 9am? Or even this very same
                        day?
                    </p>
                    <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl">
                        We specialise in express delivery. Choose same day delivery with CitySprint or next day delivery is
                        available with many of our UK couriers and starts from just £1.99 exc VAT!
                    </p>
                    <p className="text-base leading-relaxed sm:text-lg md:text-xl">
                        And if your parcel is of the highest importance, our signed for delivery options offer that added
                        layer of protection.
                    </p>
                </div>

                {/* Background Image Section */}
                <div
                    className="h-80 w-full bg-cover bg-center bg-no-repeat md:h-auto md:w-1/2"
                    style={{ backgroundImage: `url(${delivery})` }}
                />
            </div>
        </section>
    )
}

export default ExpressDelivery
