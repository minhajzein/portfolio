'use client'

import {
	FaFacebook,
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
} from 'react-icons/fa'

function Footer() {
	return (
		<div className='px-[170px] py-[32px] border-t gap-[32px] mt-[32px] flex flex-col'>
			<div className='flex justify-between'>
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
						<FaGithub className='text-[20px] text-secondary' />
						<FaLinkedin className='text-[20px] text-secondary' />
						<FaFacebook className='text-[20px] text-secondary' />
						<FaInstagramSquare className='text-[20px] text-secondary' />
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
