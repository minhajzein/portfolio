import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

const firaCode = Fira_Code({
	variable: '--font-fira',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title:
		'Minhaj | Full Stack Web Developer - Ecommerce, CRM, LMS & Booking Systems',
	description:
		'Expert MERN Stack Developer building scalable web applications worldwide. Specializing in Ecommerce, CRM, LMS, and Booking Platforms. Custom solutions for global businesses.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<Script id='gtm-script' strategy='afterInteractive'>
					{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-NZR7XK7V');
					`}
				</Script>
			</head>
			<body
				className={`${firaCode.variable} antialiased`}
				suppressHydrationWarning
			>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-NZR7XK7V'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
				<Header />
				{children}
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
