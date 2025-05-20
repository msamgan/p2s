import React from 'react'
import serviceImg from '../../../../public/frontend/assets/images/first.png'
import packageImg from '../../../../public/frontend/assets/images/second.png'
import trackImg from '../../../../public/frontend/assets/images/third.png'

const steps = [
    {
        title: 'Cheap Parcel Delivery on All Services',
        description:
            'We’re committed to offering the cheapest parcel delivery in the UAE and worldwide. With our Lowest Price Guarantee, we’ll match any comparable service you find elsewhere.',
        image: serviceImg,
    },
    {
        title: 'Send a Parcel to over 180 Countries',
        description:
            'Booking your parcel delivery is simple. Just enter your destination and parcel size into our quick quote tool to compare prices from trusted international couriers instantly.',
        image: packageImg,
    },
    {
        title: 'Free Tracking on all Parcel Services',
        description:
            'Whether you need to send a parcel within the UK or overseas, at Parcel2Ship you can always track a parcel for free.',
        image: trackImg,
    },
]

const HowItWorksSection = () => {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="mb-12 text-3xl font-extrabold tracking-tight sm:text-4xl">Why Choose Parcel to Ship?</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl"
                        >
                            <img
                                src={step.image}
                                alt={step.title}
                                className="mb-6 h-48 w-full rounded-lg object-contain"
                            />
                            <h3 className="mb-4 text-xl font-bold">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-10">
                    <button className="know-button">KNOW MORE</button>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection
