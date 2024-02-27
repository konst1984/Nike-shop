import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({
    display: 'swap',
    variable: '--font-inter',
    subsets: ['latin'],
});

const oswald = Oswald({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oswald',
});

export const metadata: Metadata = {
    title: 'Nike shop',
    description: 'Buy Nike sneakers Online',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${oswald.className} ${inter.className} antialiased`}
        >
            <body className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
