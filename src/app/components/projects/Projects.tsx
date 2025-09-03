import ProjectCard from './ProjectCard'

const projects: Project[] = [
	{
		cover: '/images/onlearn.png',
		title: 'career assessment check',
		tagline: 'Smart assessments for smarter choices.',
		techs: ['React.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'EC2'],
		live: 'https://onlearn.in',
	},
	{
		cover: '/images/kerala-offers.png',
		title: 'offer aggregator',
		tagline: 'Smart way to find, compare, and grab the hottest deals.',
		techs: [
			'React.js',
			'Node.js',
			'Express',
			'MongoDB',
			'TailwindCSS',
			'Redux',
		],
		live: 'https://keralaoffer.com',
	},
	{
		cover: '/images/vayko.png',
		title: 'Ecommerce solution',
		tagline: 'Your world of shopping, simplified.',
		techs: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Zuztand'],
		live: 'https://vayko.in/',
	},
]

function Projects() {
	return (
		<div className='grid grid-cols-3 gap-[18px] mt-[32px] px-[170px]'>
			{projects.map((project, i) => (
				<ProjectCard key={`${project.title}-${i}`} project={project} />
			))}
		</div>
	)
}

export default Projects
