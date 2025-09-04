import React from 'react'
import { FaWhatsappSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contact() {
	return (
		<div className='mt-[32px] px-[170px] flex justify-between'>
			<p className='text-[16px] text-secondary w-[50%]'>
				I am open to freelance opportunities, and I had be happy to discuss how
				I can contribute to your project. If you have any other inquiries,
				please feel free to get in touch.
			</p>
			<div className='p-[12px] text-[16px] min-w-[200px] border border-secondary flex flex-col gap-[12px]'>
				<h1 className='text-primary-foreground'>Contact me here</h1>
				<a
					href='https://wa.me/917994507560'
					target='_blank'
					className='flex items-center gap-[8px]'
				>
					<FaWhatsappSquare className='text-secondary text-[32px]' />
					<h1 className='text-secondary'>+91 79945 07560</h1>
				</a>
				<a
					href='mailto:minhajzein@gmail.com'
					target='_blank'
					className='flex items-center gap-[8px]'
				>
					<MdEmail className='text-secondary text-[32px]' />
					<h1 className='text-secondary'>minhajzein@gmail.com</h1>
				</a>
			</div>
		</div>
	)
}

export default Contact
