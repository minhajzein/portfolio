'use client'

import {
	FaFacebook,
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
} from 'react-icons/fa'
import TransitionLink from './TransitionLink'
import Link from 'next/link'

function Header() {
	return (
		<div className='flex sticky top-0 justify-between py-[32px] bg-background z-50 px-[170px]'>
			<div className='absolute left-[17px] top-0 flex flex-col items-center gap-[12px]'>
				<div className='h-[191px] w-[1px] bg-secondary'></div>
				<FaGithub className='text-[20px] text-secondary' />
				<FaLinkedin className='text-[20px] text-secondary' />
				<FaFacebook className='text-[20px] text-secondary' />
				<FaInstagramSquare className='text-[20px] text-secondary' />
			</div>
			<div className='flex items-center gap-[4px]'>
				<Link href='/' className='text-[16px]'>
					<span className='text-primary'>Minhaj</span> zein
				</Link>
			</div>
			<ol className='flex text-[16px] capitalize gap-[32px]'>
				<li>
					<TransitionLink label='home' href='/' />
				</li>
				<li>
					<TransitionLink label='works' href='/projects' />
				</li>
				<li>
					<TransitionLink label='about-me' href='/about-me' />
				</li>
				<li>
					<TransitionLink label='contact-me' href='/contact-me' />
				</li>
			</ol>
		</div>
	)
}

export default Header
