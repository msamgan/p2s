import React from 'react'
import deliveryF from '../../../../public/frontend/assets/images/flip.png'

const ParcelDelivery = () => {
    return (
        <section className="relative min-h-[600px] w-full">
            {/* Image Section - Full width on left side */}
            <div className="h-80 md:absolute md:left-0 md:top-0 md:h-full md:w-1/2">
                <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${deliveryF})` }}
                />
            </div>

            {/* Text Section - Right half with max-w-7xl constraint */}
            <div className="md:absolute md:right-0 md:top-0 md:z-10 md:h-full md:w-1/2">
                <div className="flex h-full items-center bg-[#FAFAFA] px-6 py-12 md:px-8 lg:px-10">
                    <div className="mx-auto w-full max-w-7xl">
                        <div className="max-w-xl md:mr-auto">
                            <h2 className="mb-6 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl md:text-4xl">
                                Small and Large <br /> Parcel Delivery
                            </h2>
                            <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
                                We believe you should be charged fairly based on the size of your parcel rather than overpaying for
                                a size or weight allowance you don't need.
                            </p>
                            <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
                                That's why we have services for both small parcel sizes and letters, while working with several
                                couriers that specialise in large parcel delivery and sending goods by pallet.
                            </p>
                            <p className="text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
                                But just because your parcel is bulky, doesn't mean you need to break your budget to send it. Use
                                our volume calculator to work out the weight of your parcel based on its length and width, and avoid
                                overpaying on a heavy courier service that you may not need!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ParcelDelivery
