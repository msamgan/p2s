import { Head } from '@inertiajs/react'
import Navbar from '@/Components/frontend/Navbar.jsx'
import RatesAndServicesSection from '@/Components/frontend/RatesAndServicesSection.jsx'
import Footer from '@/Components/frontend/Footer.jsx'

export default function RatesAndServices() {
    return (
        <>
            <Head title="Rates & Services" />
            <Navbar />
            <div className="flex h-48 items-center justify-center bg-gradient-to-b from-blue-600 to-blue-400 pt-16">
                <h1 className="text-center text-4xl font-extrabold text-white md:text-5xl">Our Rates & Services</h1>
            </div>
            <RatesAndServicesSection />
            <Footer />
        </>
    )
}
