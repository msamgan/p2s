import React from 'react'
import delivery from '../../../../public/frontend/assets/images/81bbef4354298fdc0f80e8f0e36a1a838df44382.png'

const ExpressDelivery = () => {
    return (
        <section className="flex min-h-[600px] flex-col bg-gradient-to-r from-[#0100FC] to-[#16B86C] text-white md:flex-row">
            {/* Text Section */}
            <div className="flex w-full flex-col justify-center px-6 py-10 md:w-1/2 md:px-20">
                <h2 className="mb-6 text-3xl font-bold leading-snug md:mb-8 lg:text-4xl">
                    Express Delivery <br /> Made Easy
                </h2>
                <p className="mb-4 text-[24px] leading-relaxed md:mb-6">
                    Do you need your parcel to arrive the next day? Want it there before 9am? Or even this very same
                    day?
                </p>
                <p className="mb-4 text-[24px] leading-relaxed md:mb-6">
                    We specialise in express delivery. Choose same day delivery with CitySprint or next day delivery is
                    available with many of our UK couriers and starts from just £1.99 exc VAT!
                </p>
                <p className="text-[24px] leading-relaxed">
                    And if your parcel is of the highest importance, our signed for delivery options offer that added
                    layer of protection.
                </p>
            </div>

            {/* Background Image Section */}
            <div
                className="min-h-[300px] w-full bg-cover bg-center bg-no-repeat md:min-h-full md:w-1/2"
                style={{ backgroundImage: `url(${delivery})` }}
            />
        </section>
    )
}

export default ExpressDelivery
