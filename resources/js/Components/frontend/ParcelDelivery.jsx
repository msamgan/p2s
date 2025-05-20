import React from 'react'
import deliveryF from '../../../../public/frontend/assets/images/flip.png'

const ParcelDelivery = () => {
    return (
        <section className="flex min-h-[600px] w-full flex-col md:flex-row">
            {/* Image Section */}
            <div
                className="h-80 w-full bg-cover bg-center md:h-auto md:w-1/2"
                style={{ backgroundImage: `url(${deliveryF})` }}
            />

            {/* Text Section */}
            <div className="flex w-full flex-col justify-center bg-[#FAFAFA] px-6 py-12 md:w-1/2 md:px-10 lg:px-16">
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
        </section>
    )
}

export default ParcelDelivery
