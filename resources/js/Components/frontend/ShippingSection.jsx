import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/react'
import InputError from '@/Components/InputError.jsx'
import { countries as _countries } from '@actions/RateController.js'

const ShippingSection = () => {
    const [activeTab, setActiveTab] = useState('AEtoAE')
    const [showServices, setShowServices] = useState(false)
    const [shippingServices, setShippingServices] = useState([])
    const [countries, setCountries] = useState([])

    const getCountries = async () => setCountries(await _countries.data({}))

    const { data, setData, errors } = useForm({
        to: '',
        length: '',
        width: '',
        height: '',
        weight: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        fetch(route('rate.show.rates', data))
            .then((response) => response.json())
            .then((data) => {
                setShippingServices(data)
                setShowServices(true)
            })
    }

    useEffect(() => {
        setShowServices(false)
        if (activeTab === 'AEtoAE') {
            setData('to', 'ae')
        }
    }, [activeTab])

    useEffect(() => {
        getCountries().then()
    }, [])

    const renderForm = () => {
        switch (activeTab) {
            case 'AEtoAE':
                return (
                    <div className="flex flex-wrap items-end gap-5">
                        <form onSubmit={onSubmit}>
                            <div className="mt-5 flex w-full gap-5">
                                <div className="flex min-w-[180px] flex-1 flex-col">
                                    <label className="mb-2 text-sm font-semibold text-blue-700">
                                        Length<sup className={'text-red-800'}>*</sup>
                                    </label>
                                    <input
                                        type="number"
                                        className="rounded-xl border bg-white px-4 py-3 shadow-sm"
                                        placeholder="cm"
                                        value={data.length}
                                        onChange={(e) => setData('length', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.length} />
                                </div>
                                <div className="flex min-w-[180px] flex-1 flex-col">
                                    <label className="mb-2 text-sm font-semibold text-blue-700">
                                        Width<sup className={'text-red-800'}>*</sup>
                                    </label>
                                    <input
                                        type="number"
                                        className="rounded-xl border bg-white px-4 py-3 shadow-sm"
                                        placeholder="cm"
                                        value={data.width}
                                        onChange={(e) => setData('width', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.width} />
                                </div>
                                <div className="flex min-w-[180px] flex-1 flex-col">
                                    <label className="mb-2 text-sm font-semibold text-blue-700">
                                        Height<sup className={'text-red-800'}>*</sup>
                                    </label>
                                    <input
                                        type="number"
                                        className="rounded-xl border bg-white px-4 py-3 shadow-sm"
                                        placeholder="cm"
                                        value={data.height}
                                        onChange={(e) => setData('height', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.height} />
                                </div>
                                <div className="flex min-w-[180px] flex-1 flex-col">
                                    <label className="mb-2 text-sm font-semibold text-blue-700">
                                        Weight<sup className={'text-red-800'}>*</sup>
                                    </label>
                                    <input
                                        type="number"
                                        minLength={0.5}
                                        maxLength={50}
                                        className="rounded-xl border bg-white px-4 py-3 shadow-sm"
                                        placeholder="kg"
                                        value={data.weight}
                                        onChange={(e) => setData('weight', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.weight} />
                                </div>
                                <div className="flex items-end">
                                    <button className="rounded-xl bg-green-600 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-green-700">
                                        Get a Quote
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )

            case 'International':
                return (
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-wrap items-end gap-5">
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-2 text-sm font-semibold text-blue-700">
                                    Length<sup className={'text-red-800'}>*</sup>
                                </label>
                                <input
                                    type="text"
                                    className="rounded-xl border bg-white px-4 py-3 shadow-sm"
                                    placeholder="cm"
                                    value={data.length}
                                    onChange={(e) => setData('length', e.target.value)}
                                />
                            </div>
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-2 text-sm font-semibold text-blue-700">
                                    Width<sup className={'text-red-800'}>*</sup>
                                </label>
                                <input
                                    type="text"
                                    className="rounded-xl border bg-white px-4 py-3 shadow-sm"
                                    placeholder="cm"
                                    value={data.width}
                                    onChange={(e) => setData('width', e.target.value)}
                                />
                            </div>
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-2 text-sm font-semibold text-blue-700">
                                    Height<sup className={'text-red-800'}>*</sup>
                                </label>
                                <input
                                    type="text"
                                    className="rounded-xl border bg-white px-4 py-3 shadow-sm"
                                    placeholder="cm"
                                    value={data.height}
                                    onChange={(e) => setData('height', e.target.value)}
                                />
                            </div>
                            <div className="flex min-w-[180px] flex-1 flex-col">
                                <label className="mb-2 text-sm font-semibold text-blue-700">
                                    Weight<sup className={'text-red-800'}>*</sup>
                                </label>
                                <input
                                    type="text"
                                    className="rounded-xl border bg-white px-4 py-3 shadow-sm"
                                    placeholder="kg"
                                    value={data.weight}
                                    onChange={(e) => setData('weight', e.target.value)}
                                />
                            </div>

                            <div className="mt-1 flex w-full gap-5">
                                <div className="flex min-w-[180px] flex-1 flex-col">
                                    <label className="mb-2 text-sm font-semibold text-blue-700">Send To</label>
                                    {countries.length > 0 && (
                                        <select
                                            onChange={(e) => setData('to', e.target.value)}
                                            required={true}
                                            className={'w-full rounded-xl border bg-white px-4 py-3 shadow-sm'}
                                        >
                                            <option value="">Select Country</option>
                                            {countries.map((country) => (
                                                <option key={country.code} value={country.code}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                                <div className="flex items-end">
                                    <button className="rounded-xl bg-green-600 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-green-700">
                                        Get a Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )

            default:
                return null
        }
    }

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
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Shipping Company
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Weight
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Price
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Delivery Time
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {shippingServices.map((service) => (
                                <tr key={service.service} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img className="h-10 w-10" src={service.logo} alt={service.company} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {service.service}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {service.weight} {service.weight_unit}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {service.rate} {service.currency}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm text-gray-900">{service.delivery_time}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-start bg-gradient-to-b from-blue-600 to-blue-400 px-6 py-12 md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-7xl rounded-3xl bg-secondary/80 p-6 shadow-lg md:p-8">
                <div className="mb-8 flex items-center justify-between gap-5">
                    <button
                        onClick={() => setActiveTab('AEtoAE')}
                        className={`flex-1 rounded-xl py-4 text-center text-base font-semibold transition md:text-lg ${
                            activeTab === 'AEtoAE' ? 'bg-primary text-white shadow-md' : 'bg-secondary text-blue-700'
                        }`}
                    >
                        Send Within UAE
                    </button>
                    <button
                        onClick={() => setActiveTab('International')}
                        className={`flex-1 rounded-xl py-4 text-center text-base font-semibold transition md:text-lg ${
                            activeTab === 'International'
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-secondary text-blue-700'
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
