import React from 'react'

function FunFacts() {
	return (
		<div className='flex w-full'>
			<div className='flex flex-wrap w-full gap-[8px]'>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					I enjoy debugging{' '}
					<span className='text-primary-foreground'>backend</span> issues more
					than <span className='text-primary-foreground'>frontend</span> styling
					(but I secretly love good UI ✨)
				</h1>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					<span className='text-primary-foreground'>Dark mode</span> is not just
					a preference, it is a lifestyle. 🌑
				</h1>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					I like building scalable{' '}
					<span className='text-primary-foreground'>APIs</span> almost as much
					as building <span className='text-primary-foreground'>Legos</span> as
					a kid.
				</h1>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					Coffee fuels my{' '}
					<span className='text-primary-foreground'>pnpm run dev</span>. ☕
				</h1>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					I prefer solving{' '}
					<span className='text-primary-foreground'>merge conflicts</span> over
					traffic jams.
				</h1>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					My idea of a fun Friday night? Deploying without errors on the first
					try. 🚀
				</h1>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					I enjoy optimizing{' '}
					<span className='text-primary-foreground'>MongoDB </span>
					queries more than optimizing my sleep schedule.
				</h1>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					I like exploring new{' '}
					<span className='text-primary-foreground'>JS libraries </span>
					more than watching Netflix.
				</h1>
				<h1 className='text-[16px] p-[8px] text-secondary border'>
					Tabs over spaces… always. 😉
				</h1>
			</div>
		</div>
	)
}

export default FunFacts
