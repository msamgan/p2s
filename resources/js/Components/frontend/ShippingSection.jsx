import React, { useState } from 'react'

const ShippingSection = () => {
    const [activeTab, setActiveTab] = useState('AEtoAE')
    const [showServices, setShowServices] = useState(false)

    // Sample shipping services data - in a real app, this would come from an API
    const shippingServices = [
        {
            id: 1,
            company: 'DHL',
            logo: 'https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg',
            price: 'AED 45',
            deliveryTime: '1-2 days',
            rating: 4.8,
            features: ['Tracking', 'Insurance', 'Door to Door']
        },
        {
            id: 2,
            company: 'FedEx',
            logo: 'https://www.fedex.com/content/dam/fedex-com/logos/logo.png',
            price: 'AED 52',
            deliveryTime: '1-3 days',
            rating: 4.7,
            features: ['Tracking', 'Insurance', 'Signature Required']
        },
        {
            id: 3,
            company: 'Emirates Post',
            logo: 'https://www.emiratespost.ae/assets/images/logo.svg',
            price: 'AED 35',
            deliveryTime: '2-4 days',
            rating: 4.5,
            features: ['Tracking', 'PO Box Delivery']
        },
        {
            id: 4,
            company: 'Aramex',
            logo: 'https://www.aramex.com/content/dam/aramex/global/logos/aramex-logo.svg',
            price: 'AED 40',
            deliveryTime: '1-3 days',
            rating: 4.6,
            features: ['Tracking', 'Insurance', 'Door to Door']
        }
    ]

    const renderShippingServices = () => {
        if (!showServices) return null

        return (
            <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-blue-700">Available Shipping Services</h3>
                    <button
                        onClick={() => setShowServices(false)}
                        className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                    >
                        Close
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Shipping Company
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Delivery Time
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Features
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {shippingServices.map((service) => (
                                <tr key={service.id} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img className="h-10 w-10" src={service.logo} alt={service.company} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{service.company}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{service.price}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm text-gray-900">{service.deliveryTime}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm text-gray-900">{service.rating} ★</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {service.features.map((feature, index) => (
                                                <span key={index} className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                                            Select
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const renderForm = () => {
        switch (activeTab) {
            case 'AEtoAE':
                return (
                    <div className="flex flex-wrap items-end gap-5">
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Send To</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm">
                                <span>UK - Mainland</span>
                                <span className="text-xl text-blue-700">⌄</span>
                            </div>
                        </div>
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Length</label>
                            <div className="rounded-xl border bg-white px-4 py-3 shadow-sm">Less than 1 metre</div>
                        </div>
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Weight</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm">
                                <input type="number" defaultValue={1} className="w-full outline-none" />
                                <span className="ml-2 text-blue-700">kg</span>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <button
                                onClick={() => setShowServices(true)}
                                className="rounded-xl bg-green-600 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-green-700">
                                Get a Quote
                            </button>
                        </div>
                    </div>
                )

            case 'International':
                return (
                    <div className="flex flex-wrap items-end gap-5">
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Send From</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm">
                                <span>UK - Mainland</span>
                                <span className="text-xl text-blue-700">⌄</span>
                            </div>
                        </div>
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Send To</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm">
                                <span>USA</span>
                                <span className="text-xl text-blue-700">⌄</span>
                            </div>
                        </div>
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Weight</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm">
                                <input type="number" defaultValue={1} className="w-full outline-none" />
                                <span className="ml-2 text-blue-700">kg</span>
                            </div>
                        </div>

                        <div className="flex w-full gap-5 mt-5">
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-2 text-sm font-semibold text-blue-700">Length</label>
                                <input type="text" className="rounded-xl border bg-white px-4 py-3 shadow-sm" placeholder="cm" />
                            </div>
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-2 text-sm font-semibold text-blue-700">Width</label>
                                <input type="text" className="rounded-xl border bg-white px-4 py-3 shadow-sm" placeholder="cm" />
                            </div>
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-2 text-sm font-semibold text-blue-700">Height</label>
                                <input type="text" className="rounded-xl border bg-white px-4 py-3 shadow-sm" placeholder="cm" />
                            </div>
                            <div className="flex items-end">
                                <button
                                    onClick={() => setShowServices(true)}
                                    className="rounded-xl bg-green-600 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-green-700"
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <div className="flex flex-col items-center justify-start bg-gradient-to-b from-blue-600 to-blue-400 px-6 py-12 md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-7xl rounded-3xl bg-secondary/80 p-6 md:p-8 shadow-lg">
                <div className="mb-8 flex items-center justify-between gap-5">
                    <button
                        onClick={() => setActiveTab('AEtoAE')}
                        className={`flex-1 rounded-xl py-4 text-center text-base font-semibold transition md:text-lg ${
                            activeTab === 'AEtoAE' ? 'bg-primary text-white shadow-md' : 'bg-secondary text-blue-700'
                        }`}
                    >
                        Send UAE to UAE
                    </button>
                    <button
                        onClick={() => setActiveTab('International')}
                        className={`flex-1 rounded-xl py-4 text-center text-base font-semibold transition md:text-lg ${
                            activeTab === 'International' ? 'bg-primary text-white shadow-md' : 'bg-secondary text-blue-700'
                        }`}
                    >
                        Send Internationally
                    </button>
                </div>

                {renderForm()}
                {renderShippingServices()}
            </div>
        </div>
    )
}

export default ShippingSection
