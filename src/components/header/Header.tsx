'use client'

import {
	FaFacebook,
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
} from 'react-icons/fa'

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
				<h1 className='text-[16px]'>
					<span className='text-primary'>Minhaj</span> zein
				</h1>
			</div>
			<ol className='flex text-[16px] capitalize gap-[32px]'>
				<li>
					<span className='text-primary'>#</span>home
				</li>
				<li>
					<span className='text-primary'>#</span>works
				</li>
				<li>
					<span className='text-primary'>#</span>about-me
				</li>
				<li>
					<span className='text-primary'>#</span>contact-me
				</li>
			</ol>
		</div>
	)
}

export default Header
