import React, { useState } from 'react'

const ShippingSection = () => {
    const [activeTab, setActiveTab] = useState('AEtoAE')

    const renderForm = () => {
        switch (activeTab) {
            case 'AEtoAE':
                return (
                    <div className="flex flex-wrap items-end gap-4">
                        <div className="flex min-w-[150px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Send To</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3">
                                <span>UK - Mainland</span>
                                <span className="text-xl text-blue-700">⌄</span>
                            </div>
                        </div>
                        <div className="flex min-w-[150px] flex-1 flex-col">
                            <label className="mb-1 text-sm font-semibold text-blue-700">Length</label>
                            <div className="rounded-xl border bg-white px-4 py-3">Less than 1 metre</div>
                        </div>
                        <div className="flex min-w-[150px] flex-1 flex-col">
                            <label className="mb-1 text-sm font-semibold text-blue-700">Weight</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3">
                                <input type="number" defaultValue={1} className="w-full outline-none" />
                                <span className="ml-2 text-blue-700">kg</span>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <button className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white">
                                Get a Quote
                            </button>
                        </div>
                    </div>
                )

            case 'International':
                return (
                    <div className="flex flex-wrap items-end gap-4">
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Send From</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3">
                                <span>UK - Mainland</span>
                                <span className="text-xl text-blue-700">⌄</span>
                            </div>
                        </div>
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-2 text-sm font-semibold text-blue-700">Send To</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3">
                                <span>USA</span>
                                <span className="text-xl text-blue-700">⌄</span>
                            </div>
                        </div>
                        <div className="flex min-w-[180px] flex-1 flex-col">
                            <label className="mb-1 text-sm font-semibold text-blue-700">Weight</label>
                            <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3">
                                <input type="number" defaultValue={1} className="w-full outline-none" />
                                <span className="ml-2 text-blue-700">kg</span>
                            </div>
                        </div>

                        <div className="flex w-full gap-4">
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-1 text-sm font-semibold text-blue-700">Length</label>
                                <input type="text" className="rounded-xl border bg-white px-4 py-3" placeholder="cm" />
                            </div>
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-1 text-sm font-semibold text-blue-700">Width</label>
                                <input type="text" className="rounded-xl border bg-white px-4 py-3" placeholder="cm" />
                            </div>
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-1 text-sm font-semibold text-blue-700">Height</label>
                                <input type="text" className="rounded-xl border bg-white px-4 py-3" placeholder="cm" />
                            </div>
                            <div className="flex items-end">
                                <button
                                    type="submit"
                                    className="transform rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-md transition-all duration-300 ease-in-out hover:bg-green-700"
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
        <div className="min-h-500 flex flex-col items-center justify-start bg-gradient-to-b from-blue-600 to-blue-400 px-4 pb-10 pt-10">
            <div className="w-full max-w-7xl rounded-3xl bg-secondary/80 p-8">
                <div className="mb-6 flex items-center justify-between gap-5">
                    <button
                        onClick={() => setActiveTab('AEtoAE')}
                        className={`flex-1 rounded-xl rounded-t-2xl py-4 text-center text-lg font-semibold ${
                            activeTab === 'AEtoAE' ? 'bg-primary text-white' : 'bg-secondary text-blue-700'
                        }`}
                    >
                        Send UAE to UAE
                    </button>
                    <button
                        onClick={() => setActiveTab('International')}
                        className={`flex-1 rounded-xl py-4 text-center text-lg font-semibold ${
                            activeTab === 'International' ? 'bg-primary text-white' : 'bg-secondary text-blue-700'
                        }`}
                    >
                        Send Internationally
                    </button>
                </div>

                {renderForm()}
            </div>
        </div>
    )
}

export default ShippingSection
