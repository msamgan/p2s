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
        icon: '💰',
    },
    {
        title: 'Send a Parcel to over 180 Countries',
        description:
            'Booking your parcel delivery is simple. Just enter your destination and parcel size into our quick quote tool to compare prices from trusted international couriers instantly.',
        image: packageImg,
        icon: '🌎',
    },
    {
        title: 'Free Tracking on all Parcel Services',
        description:
            'Whether you need to send a parcel within the UK or overseas, at Parcel2Ship you can always track a parcel for free.',
        image: trackImg,
        icon: '📦',
    },
]

const HowItWorksSection = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 px-6 py-20 md:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">SHIPPING MADE SIMPLE</span>
                    <h2 className="mb-6 mt-4 text-3xl font-extrabold leading-tight tracking-tight text-blue-800 sm:text-4xl lg:text-5xl">
                        Why Choose Parcel to Ship?
                    </h2>
                    <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                        We offer the most reliable, affordable, and efficient parcel delivery services worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl md:p-8"
                        >
                            {/* Step Number */}
                            <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:rotate-12">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-3xl text-blue-600 shadow-sm transition-all duration-300 group-hover:shadow-md">
                                {step.icon}
                            </div>

                            {/* Image */}
                            <div className="relative mb-6 overflow-hidden rounded-xl shadow-md">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <h3 className="mb-4 text-xl font-bold leading-tight text-blue-800 transition-colors duration-300 group-hover:text-blue-600">{step.title}</h3>
                            <p className="text-base leading-relaxed text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-16 text-center">
                    <button className="group relative inline-flex items-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-10 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-800 hover:to-blue-700 hover:shadow-lg">
                        <span className="mr-2">KNOW MORE</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span className="absolute -right-12 top-0 h-full w-12 translate-x-12 transform bg-white/10 skew-x-[30deg] transition-all duration-700 group-hover:-translate-x-32"></span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection
