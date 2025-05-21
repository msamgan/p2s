import { Head } from '@inertiajs/react'
import Navbar from '@/Components/frontend/Navbar.jsx'
import RatesAndServicesSection from '@/Components/frontend/RatesAndServicesSection.jsx'
import Footer from '@/Components/frontend/Footer.jsx'

export default function RatesAndServices() {
    return (
        <>
            <Head title="Rates & Services" />
            <Navbar />
            <div className="pt-16 bg-gradient-to-b from-blue-600 to-blue-400 h-48 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
                    Our Rates & Services
                </h1>
            </div>
            <RatesAndServicesSection />
            <Footer />
        </>
    )
}
