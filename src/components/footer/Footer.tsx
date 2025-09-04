'use client'

import {
	FaFacebook,
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
} from 'react-icons/fa'

function Footer() {
	return (
		<div className='px-[16px] md:px-[170px] py-[32px] border-t gap-[32px] mt-[52px] flex flex-col'>
			<div className='flex flex-col md:flex-row gap-[12px] md:justify-between'>
				<div className='flex flex-col gap-[8px]'>
					<h1 className='text-[16px]'>
						Minhaj Zein{' '}
						<span className='text-secondary'>minhajzein@gmail.com</span>
					</h1>
					<p className='text-[16px]'>
						Full stack developer with hands on experience
					</p>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-[24px]'>Media</h1>
					<div className='flex items-center gap-[12px]'>
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
				</div>
			</div>
			<p className='text-[16px] text-secondary text-center'>
				© Copyright 2025. Made by Minhaj
			</p>
		</div>
	)
}

export default Footer
