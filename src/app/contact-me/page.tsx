import PageTitle from '@/components/PageTitle'
import { FaWhatsappSquare } from 'react-icons/fa'
import { MdEmail, MdPayment } from 'react-icons/md'
import Title from '../projects/components/Title'
import Medias from './components/Medias'

export const metadata = {
	title: 'Contact Minhaj – MERN Full Stack Web Developer | Calicut, Kerala',
	description:
		'Get in touch with Minhaj, a MERN full stack developer in Calicut, Kerala. Discuss your custom web application project, ask questions, or request a consultation today.',
}

function ContactMe() {
	return (
		<div className='flex flex-col w-full px-[16px] md:px-[170px] gap-[32px] py-[32px]'>
			<PageTitle
				title='contact-me'
				description={`Reach out, and let's build something amazing.`}
			/>
			<div className='flex flex-col gap-[24px] md:flex-row md:justify-between'>
				<p className='text-[16px] text-secondary w-full md:w-[50%]'>
					{`Have an idea or a project you want to discuss?
                     Whether it’s a startup, small business, or enterprise solution,
					  I’ll help you build a web application that works for you and your users.`}
				</p>
				<div className='flex flex-col md:flex-row md:gap-[12px] gap-[24px]'>
					<div className='p-[12px] text-[16px] h-fit min-w-[200px] border border-secondary flex flex-col gap-[12px]'>
						<h1 className='text-primary-foreground'>Support me here</h1>
						<div className='flex items-center gap-[8px]'>
							<MdPayment className='text-secondary text-[32px]' />
							<h1 className='text-secondary'>UPI: 7994507560@ybl</h1>
						</div>
					</div>
					<div className='p-[12px] text-[16px] min-w-[200px] border border-secondary flex flex-col gap-[12px]'>
						<h1 className='text-primary-foreground'>Contact me here</h1>
						<a
							href='https://wa.me/917994507560'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-[8px]'
						>
							<FaWhatsappSquare className='text-secondary text-[32px]' />
							<h1 className='text-secondary'>+91 79945 07560</h1>
						</a>
						<a
							href='mailto:minhaj@reveinfotech.com'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-[8px]'
						>
							<MdEmail className='text-secondary text-[32px]' />
							<h1 className='text-secondary'>minhaj@reveinfotech.com</h1>
						</a>
					</div>
				</div>
			</div>
			<Title title='all-media' />
			<Medias />
		</div>
	)
}

export default ContactMe
