import React from 'react'
import delivery from '../../../../public/frontend/assets/images/81bbef4354298fdc0f80e8f0e36a1a838df44382.png'

const Delivery = () => {
    return (
        <section className="relative min-h-[600px] bg-gradient-to-r from-[#0100FC] to-[#16B86C] text-white">
            {/* Text Section - Left half with max-w-7xl constraint */}
            <div className="md:absolute md:left-0 md:top-0 md:z-10 md:h-full md:w-1/2">
                <div className="flex h-full items-center px-6 py-12 md:px-8 lg:px-10">
                    <div className="mx-auto w-full max-w-7xl">
                        <div className="max-w-xl md:ml-auto">
                            <h2 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                                Delivery Services to <br /> Suit Your Needs
                            </h2>
                            <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl">
                                We know that when it comes to sending a parcel, everyone has different needs. You might love the
                                flexibility of parcel drop off services or require a parcel pickup from the comfort of your own
                                home. Equally, you may run a business and have ecommerce shipping needs.
                            </p>
                            <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl">
                                Maybe one of our 250,000 parcel drop off points is on your school run but you don't have a printer?
                                We've got you covered for that too.
                            </p>
                            <p className="text-base leading-relaxed sm:text-lg md:text-xl">
                                Parcel collection or drop off delivery, Parcel2Ship has the service for you with low postage costs
                                guaranteed.
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

export default Delivery
