'use client'

import {
	FaFacebook,
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
} from 'react-icons/fa'
import TransitionLink from './TransitionLink'
import Link from 'next/link'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import { Button } from '../ui/button'
import { useState } from 'react'

const navItems = [
	{ id: 1, label: 'home', href: '/' },
	{ id: 2, label: 'works', href: '/projects' },
	{ id: 3, label: 'blogs', href: '/blogs' },
	{ id: 4, label: 'about-me', href: '/about-me' },
	{ id: 5, label: 'contact-me', href: '/contact-me' },
]

function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleMenuOpen = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div className='flex sticky top-0 justify-between w-full items-center py-[16px] md:py-[32px] bg-background z-50 px-[16px] md:px-[170px]'>
			<div className='absolute left-[17px] top-0 hidden md:flex flex-col items-center gap-[12px]'>
				<div className='h-[191px] w-[1px] bg-secondary'></div>
				<a
					href='https://github.com/minhajzein'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithub className='text-[20px] text-secondary' />
				</a>
				<a
					href='http://www.linkedin.com/in/minhajzein'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaLinkedin className='text-[20px] text-secondary' />
				</a>
				<a
					href='https://www.facebook.com/muhammed.minhajzein.5'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaFacebook className='text-[20px] text-secondary' />
				</a>
				<a
					href='https://www.instagram.com/minhaaaj__'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaInstagramSquare className='text-[20px] text-secondary' />
				</a>
			</div>
			<div className='flex items-center gap-[4px] z-50'>
				<Link href='/' className='text-[16px] text-nowrap'>
					<span className='text-primary'>Minhaj</span> Zein
				</Link>
			</div>
			<Button
				variant='destructive'
				onClick={handleMenuOpen}
				className='cursor-pointer md:hidden z-50'
			>
				{isOpen ? (
					<CgClose className='text-[24px]' />
				) : (
					<CgMenuRight className='text-[24px]' />
				)}
			</Button>

			<ol
				className={`${isOpen ? 'left-0' : '-left-full'
					} flex flex-col md:static absolute duration-300 top-0 bg-background w-screen md:w-auto md:pb-0 md:px-0 px-[16px] pt-[140px] md:pt-0 pb-[80px] h-dvh md:h-auto md:flex-row capitalize gap-[52px] md:gap-[32px]`}
			>
				{navItems.map(item => (
					<li key={item.id}>
						<TransitionLink
							label={item.label}
							href={item.href}
							closeMenu={setIsOpen}
						/>
					</li>
				))}
				<li className='mt-[72px] md:hidden flex'>
					<ul className='m-auto flex gap-[24px]'>
						<li>
							<a
								href='https://github.com/minhajzein'
								rel='noopener noreferrer'
								target='_blank'
							>
								<FaGithub className='text-[40px] text-secondary' />
							</a>
						</li>
						<li>
							<a
								href='http://www.linkedin.com/in/minhajzein'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaLinkedin className='text-[40px] text-secondary' />
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/muhammed.minhajzein.5'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaFacebook className='text-[40px] text-secondary' />
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/minhaaaj__'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaInstagramSquare className='text-[40px] text-secondary' />
							</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
	)
}

export default Header
