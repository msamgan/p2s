import React, { useState } from 'react'

const RatesAndServicesSection = () => {
    const [fromCountry, setFromCountry] = useState('UAE')
    const [toCountry, setToCountry] = useState('UAE')
    const [weight, setWeight] = useState(1)
    const [packageType, setPackageType] = useState('parcel')
    const [calculatedRates, setCalculatedRates] = useState(null)

    // Sample service types with more detailed information
    const serviceTypes = [
        {
            id: 'standard',
            title: 'Standard Delivery',
            description: 'Affordable delivery for non-urgent shipments',
            icon: '📦',
            deliveryTime: '3-5 business days',
            features: ['Door-to-door delivery', 'Online tracking', 'Proof of delivery'],
            priceMultiplier: 1.0,
            availableCountries: ['UAE', 'GCC Countries', 'Middle East', 'Asia', 'Europe', 'North America'],
        },
        {
            id: 'express',
            title: 'Express Delivery',
            description: 'Fast delivery for time-sensitive shipments',
            icon: '🚚',
            deliveryTime: '1-2 business days',
            features: ['Priority handling', 'Express customs clearance', 'Guaranteed delivery time'],
            priceMultiplier: 1.5,
            availableCountries: ['UAE', 'GCC Countries', 'Middle East', 'Asia', 'Europe', 'North America'],
        },
        {
            id: 'sameday',
            title: 'Same Day Delivery',
            description: 'Urgent delivery within hours',
            icon: '⚡',
            deliveryTime: 'Same day (within 8 hours)',
            features: ['Immediate pickup', 'Direct delivery', 'Real-time tracking'],
            priceMultiplier: 2.5,
            availableCountries: ['UAE'],
        },
        {
            id: 'economy',
            title: 'Economy Shipping',
            description: 'Cost-effective solution for non-urgent deliveries',
            icon: '💰',
            deliveryTime: '5-7 business days',
            features: ['Budget-friendly', 'Consolidated shipping', 'Eco-friendly options'],
            priceMultiplier: 0.8,
            availableCountries: ['UAE', 'GCC Countries', 'Middle East', 'Asia', 'Europe', 'North America'],
        },
        {
            id: 'premium',
            title: 'Premium Service',
            description: 'White-glove service for valuable or delicate items',
            icon: '✨',
            deliveryTime: '2-3 business days',
            features: ['Special handling', 'Insurance included', 'Signature required'],
            priceMultiplier: 2.0,
            availableCountries: ['UAE', 'GCC Countries', 'Middle East', 'Asia', 'Europe', 'North America'],
        },
    ]

    // Base rates by weight and destination
    const baseRates = {
        domestic: [
            { weight: '0-1 kg', basePrice: 9 },
            { weight: '1-2 kg', basePrice: 12 },
            { weight: '2-5 kg', basePrice: 18 },
            { weight: '5-10 kg', basePrice: 25 },
            { weight: '10-20 kg', basePrice: 40 },
        ],
        international: [
            { destination: 'GCC Countries', weight: '0-1 kg', basePrice: 50 },
            { destination: 'Middle East', weight: '0-1 kg', basePrice: 70 },
            { destination: 'Europe', weight: '0-1 kg', basePrice: 100 },
            { destination: 'North America', weight: '0-1 kg', basePrice: 120 },
            { destination: 'Asia', weight: '0-1 kg', basePrice: 90 },
        ]
    }

    // Function to calculate shipping rates based on inputs
    const calculateRates = () => {
        // Simulate API call or calculation
        const isInternational = fromCountry !== toCountry
        const rateType = isInternational ? 'international' : 'domestic'

        // Find base price based on weight and destination
        let basePrice = 0
        if (rateType === 'domestic') {
            const rateInfo = baseRates.domestic.find(r => {
                const [min, max] = r.weight.split('-').map(w => parseInt(w.replace(' kg', '')))
                return weight >= min && weight <= max
            }) || baseRates.domestic[baseRates.domestic.length - 1]
            basePrice = rateInfo.basePrice
        } else {
            // For international, find by destination
            const rateInfo = baseRates.international.find(r => r.destination === toCountry) ||
                            baseRates.international[0] // Default to first if not found
            basePrice = rateInfo.basePrice
        }

        // Calculate rates for each service type
        const results = serviceTypes
            .filter(service => service.availableCountries.includes(toCountry))
            .map(service => ({
                ...service,
                price: Math.round(basePrice * service.priceMultiplier * 100) / 100,
                estimatedDelivery: service.deliveryTime
            }))

        setCalculatedRates(results)
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Rates & Services</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We offer competitive rates for both domestic and international shipping with a variety of service options to meet your needs.
                    </p>
                </div>

                {/* Rate Calculator Section */}
                <div className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Calculate Shipping Rates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">From</label>
                            <select
                                className="rounded-xl border px-4 py-3 shadow-sm"
                                value={fromCountry}
                                onChange={(e) => setFromCountry(e.target.value)}
                            >
                                <option value="UAE">UAE</option>
                                <option value="GCC Countries">GCC Countries</option>
                                <option value="Middle East">Middle East</option>
                                <option value="Europe">Europe</option>
                                <option value="North America">North America</option>
                                <option value="Asia">Asia</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">To</label>
                            <select
                                className="rounded-xl border px-4 py-3 shadow-sm"
                                value={toCountry}
                                onChange={(e) => setToCountry(e.target.value)}
                            >
                                <option value="UAE">UAE</option>
                                <option value="GCC Countries">GCC Countries</option>
                                <option value="Middle East">Middle East</option>
                                <option value="Europe">Europe</option>
                                <option value="North America">North America</option>
                                <option value="Asia">Asia</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Weight (kg)</label>
                            <input
                                type="number"
                                className="rounded-xl border px-4 py-3 shadow-sm"
                                value={weight}
                                onChange={(e) => setWeight(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                                min="0.1"
                                step="0.1"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Package Type</label>
                            <select
                                className="rounded-xl border px-4 py-3 shadow-sm"
                                value={packageType}
                                onChange={(e) => setPackageType(e.target.value)}
                            >
                                <option value="document">Document</option>
                                <option value="parcel">Parcel</option>
                                <option value="large_parcel">Large Parcel</option>
                                <option value="fragile">Fragile</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            className="rounded-xl bg-blue-600 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-blue-700"
                            onClick={calculateRates}
                        >
                            Calculate Rates
                        </button>
                    </div>

                    {/* Display calculated rates */}
                    {calculatedRates && (
                        <div className="mt-8">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Available Shipping Options</h4>
                            <div className="grid grid-cols-1 gap-4">
                                {calculatedRates.map((option, index) => (
                                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">{option.icon}</div>
                                            <div>
                                                <h5 className="text-lg font-bold text-blue-700">{option.title}</h5>
                                                <p className="text-sm text-gray-600">Delivery in {option.estimatedDelivery}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                            <div className="text-xl font-bold text-gray-800">AED {option.price.toFixed(2)}</div>
                                            <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-green-700">
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Services Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceTypes.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h4 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h4>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="mb-4">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                                        {service.deliveryTime}
                                    </span>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Base Rates Section */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Base Rate Information</h3>
                    <p className="text-center text-gray-600 mb-8">
                        Our base rates are calculated dynamically based on weight, dimensions, and destination.
                        Use our calculator above to get accurate pricing for your specific shipment.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Domestic Base Rates */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-blue-600 text-white py-3 px-6">
                                <h4 className="text-lg font-bold">Domestic Base Rates (UAE)</h4>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-600 mb-4">
                                    Starting prices before service-specific multipliers:
                                </p>
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight Range</th>
                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {baseRates.domestic.map((rate, index) => (
                                            <tr key={index}>
                                                <td className="py-3 px-4 text-sm">{rate.weight}</td>
                                                <td className="py-3 px-4 text-sm font-medium">AED {rate.basePrice.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* International Base Rates */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-blue-600 text-white py-3 px-6">
                                <h4 className="text-lg font-bold">International Base Rates</h4>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-600 mb-4">
                                    Starting prices for 0-1 kg before service-specific multipliers:
                                </p>
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {baseRates.international.map((rate, index) => (
                                            <tr key={index}>
                                                <td className="py-3 px-4 text-sm">{rate.destination}</td>
                                                <td className="py-3 px-4 text-sm font-medium">AED {rate.basePrice.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">Need a custom quote for bulk shipments or special requirements?</p>
                        <button className="rounded-xl bg-green-600 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-green-700">
                            Request Custom Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RatesAndServicesSection
