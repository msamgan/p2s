import { Head } from '@inertiajs/react'
import Navbar from '@/Components/frontend/Navbar.jsx'
import HeroSection from '@/Components/frontend/HeroSection.jsx'
import ShippingSection from '@/Components/frontend/ShippingSection.jsx'
import HowItWorksSection from '@/Components/frontend/HowItWorksSection.jsx'
import Delivery from '@/Components/frontend/Delivery.jsx'
import ParcelDelivery from '@/Components/frontend/ParcelDelivery.jsx'
import ExpressDelivery from '@/Components/frontend/ExpressDelivery.jsx'
import Footer from '@/Components/frontend/Footer.jsx'

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <HeroSection />
            <ShippingSection />
            <HowItWorksSection />
            <Delivery />
            <ParcelDelivery />
            <ExpressDelivery />
            <Footer />
        </>
    )
}
