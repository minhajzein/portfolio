import PageTitle from '@/components/PageTitle'
import About from '../components/about/About'
import Title from '../projects/components/Title'
import Skills from './components/Skills'
import FunFacts from './components/FunFacts'
import ProblemsResolved from './components/ProblemsResolved'
import Approach from './components/Approach'

export const metadata = {
	title:
		'About Minhaj - MERN Full Stack Developer in Calicut, Kerala | Web Applications Expert',
	description:
		'Learn more about Minhaj, a MERN full stack developer in Calicut, Kerala with 3+ years experience. He builds scalable, secure, and responsive web applications to solve real business challenges.',
}

function AboutMe() {
	return (
		<div className='flex flex-col w-full px-[16px] md:px-[170px] gap-[32px] py-[32px]'>
			<PageTitle title='about-me' description='who am i?' />
			<About />
			<Title title='What Problems I Solve' />
			<ProblemsResolved />
			<Title title='My Experience & Expertise' />
			<p>
				With 3+ years of professional experience, I have helped clients and
				businesses launch modern, secure, and high-performing web applications.
				From startups to growing businesses, my work is driven by a single goal:
				turning ideas into real digital solutions that work.
			</p>
			<p>
				I stay updated with the latest MERN stack technologies, frameworks, and
				best practices, ensuring every project is future-ready, scalable, and
				maintainable.
			</p>
			<Title title='My Approach / Working Style' />
			<Approach />
			<Title title='skills' />
			<Skills />
			<Title title='my-fun-facts' />
			<FunFacts />
		</div>
	)
}

export default AboutMe
