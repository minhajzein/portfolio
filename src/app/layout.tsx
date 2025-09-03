import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Analytics } from '@vercel/analytics/next'

const firaCode = Fira_Code({
	variable: '--font-fira',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Minhaj',
	description: 'Full stack developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${firaCode.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	)
}
