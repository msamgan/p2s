import ApplicationLogo from '@/Components/ApplicationLogo'
import { Head, Link } from '@inertiajs/react'

export default function Guest({ children }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/assets/vendor/libs/node-waves/node-waves.css" />
                <link rel="stylesheet" href="/assets/vendor/css/rtl/core.css" />
                <link rel="stylesheet" href="/assets/vendor/css/rtl/theme-default.css" />
                <link rel="stylesheet" href="/assets/css/demo.css" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="fill-current w-56" />
                    </Link>
                </div>

                <div className="mt-12 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    )
}
