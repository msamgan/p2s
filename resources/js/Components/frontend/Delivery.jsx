import React from 'react'
import delivery from '../../../../public/frontend/assets/images/81bbef4354298fdc0f80e8f0e36a1a838df44382.png'

const Delivery = () => {
    return (
        <section className="font-inter flex min-h-[600px] flex-col items-stretch bg-gradient-to-r from-[#0100FC] to-[#16B86C] text-white md:flex-row">
            {/* Text Section */}
            <div className="flex w-full flex-col justify-center px-6 py-10 text-[18px] md:w-1/2 md:px-20">
                <h2 className="mb-6 text-2xl text-[34px] font-bold md:text-4xl">
                    Delivery Services to <br /> Suit Your Needs
                </h2>
                <p className="mb-10 text-[24px] leading-relaxed">
                    We know that when it comes to sending a parcel, everyone has different needs. You might love the
                    flexibility of parcel drop off services or require a parcel pickup from the comfort of your own
                    home. Equally, you may run a business and have ecommerce shipping needs.
                </p>
                <p className="mb-10 text-[24px] leading-relaxed">
                    Maybe one of our 250,000 parcel drop off points is on your school run but you don’t have a printer?
                    We’ve got you covered for that too.
                </p>
                <p className="text-[24px] leading-relaxed">
                    Parcel collection or drop off delivery, Parcel2Ship has the service for you with low postage costs
                    guaranteed.
                </p>
            </div>

            {/* Background Image Section */}
            <div
                className="h-64 w-full bg-cover bg-center bg-no-repeat md:h-auto md:w-1/2"
                style={{ backgroundImage: `url(${delivery})` }}
            />
        </section>
    )
}

export default Delivery
