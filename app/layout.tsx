import { Navbar, Sidebar } from '@/components';
import '@/styles/globals.css';
import Head from 'next/head';

export const metadata = {
    title: 'Portail Index Admin',
    description: "Interface d'adminstration du portail index",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body>
                <div className="w-[100dvw] min-h-[100dvh] flex relative">
                    <Sidebar />
                    <div className="flex-1">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}

export default RootLayout