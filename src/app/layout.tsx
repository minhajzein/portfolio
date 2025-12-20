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

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Minhaj Zein',
	url: 'https://minhaj.reveinfotech.com',
	jobTitle: 'Full Stack Developer',
	sameAs: [
		'https://github.com/minhajzein',
		'http://www.linkedin.com/in/minhajzein',
		'https://www.facebook.com/muhammed.minhajzein.5',
		'https://www.instagram.com/minhaaaj__',
	],
	knowsAbout: [
		'Full Stack Development',
		'MERN Stack',
		'React',
		'Next.js',
		'Ecommerce',
		'CRM',
		'LMS',
		'Booking Systems',
		'Web Development',
	],
	description:
		'Expert MERN Stack Developer building scalable web applications worldwide. Specializing in Ecommerce, CRM, LMS, and Booking Platforms.',
}

export const metadata: Metadata = {
	metadataBase: new URL('https://minhaj.reveinfotech.com'),
	title: {
		default:
			'Minhaj | Full Stack Web Developer - Ecommerce, CRM, LMS & Booking Systems',
		template: '%s | Minhaj - Full Stack Developer',
	},
	description:
		'Expert MERN Stack Developer building scalable web applications worldwide. Specializing in Ecommerce, CRM, LMS, and Booking Platforms. Custom solutions for global businesses.',
	keywords: [
		'Full Stack Developer',
		'MERN Stack',
		'React',
		'Next.js',
		'Ecommerce',
		'CRM',
		'LMS',
		'Booking Systems',
		'Web Development',
		'Software Engineer',
		'Global Web Solutions',
		'Minhaj Zein',
		'Portfolio',
	],
	authors: [{ name: 'Minhaj Zein', url: 'https://minhaj.reveinfotech.com' }],
	creator: 'Minhaj Zein',
	publisher: 'Minhaj Zein',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		title:
			'Minhaj | Full Stack Web Developer - Ecommerce, CRM, LMS & Booking Systems',
		description:
			'Expert MERN Stack Developer building scalable web applications worldwide. Specializing in Ecommerce, CRM, LMS, and Booking Platforms.',
		url: 'https://minhaj.reveinfotech.com',
		siteName: 'Minhaj Zein Portfolio',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/images/my-pic-1.png', // Using existing personal image
				width: 1200,
				height: 630,
				alt: 'Minhaj Zein - Full Stack Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Minhaj | Full Stack Web Developer',
		description:
			'Expert MERN Stack Developer building scalable web applications worldwide.',
		creator: '@minhajzein',
		images: ['/images/my-pic-1.png'],
	},
	alternates: {
		canonical: 'https://minhaj.reveinfotech.com',
	},
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
				<Script
					id='json-ld'
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	)
}
