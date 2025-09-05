import {
	FaFacebook,
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
	FaStackOverflow,
} from 'react-icons/fa'
import { SiGeeksforgeeks, SiMedium } from 'react-icons/si'

function Medias() {
	return (
		<div className='flex flex-wrap gap-[32px]'>
			<a
				href='https://github.com/minhajzein'
				target='_blank'
				className='flex items-center gap-[8px]'
				rel='noopener noreferrer'
			>
				<FaGithub className='text-[32px] text-secondary' />
				<h1 className='text-secondary text-[16px]'>GitHub</h1>
			</a>
			<a
				href='http://www.linkedin.com/in/minhajzein'
				className='flex items-center gap-[8px]'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaLinkedin className='text-[32px] text-secondary' />
				<h1 className='text-secondary text-[16px]'>LinkedIn</h1>
			</a>
			<a
				href='https://stackoverflow.com/users/19935742/minhaj'
				className='flex items-center gap-[8px]'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaStackOverflow className='text-[32px] text-secondary' />
				<h1 className='text-secondary text-[16px]'>Stack Overflow</h1>
			</a>
			<a
				href='https://medium.com/@minhajzein'
				className='flex items-center gap-[8px]'
				target='_blank'
				rel='noopener noreferrer'
			>
				<SiMedium className='text-[32px] text-secondary' />
				<h1 className='text-secondary text-[16px]'>Medium</h1>
			</a>
			<a
				href='https://www.geeksforgeeks.org/user/minhajsfsd/'
				className='flex items-center gap-[8px]'
				target='_blank'
				rel='noopener noreferrer'
			>
				<SiGeeksforgeeks className='text-[32px] text-secondary' />
				<h1 className='text-secondary text-[16px]'>Geekforgeeks</h1>
			</a>
			<a
				href='https://www.facebook.com/muhammed.minhajzein.5'
				className='flex items-center gap-[8px]'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaFacebook className='text-[32px] text-secondary' />
				<h1 className='text-secondary text-[16px]'>Facebook</h1>
			</a>
			<a
				href='https://www.instagram.com/minhaaaj__'
				className='flex items-center gap-[8px]'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaInstagramSquare className='text-[32px] text-secondary' />
				<h1 className='text-secondary text-[16px]'>Instagram</h1>
			</a>
		</div>
	)
}

export default Medias
