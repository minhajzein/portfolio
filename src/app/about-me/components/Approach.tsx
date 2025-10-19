import React from 'react'

function Approach() {
	return (
		<div className='flex flex-col'>
			<p>
				I believe development is more than just coding — it’s about
				understanding your business, your users, and your goals.
			</p>
			<br />
			<p>{`Here’s how I work:`}</p>
			<br />
			<ul className='list-decimal md:pl-12 pl-2'>
				<li>
					<span className='text-primary'>Listen first:</span> Understand your
					requirements, pain points, and objectives.
				</li>
				<li>
					<span className='text-primary'>Develop & Test: </span>
					Implement clean code, secure databases, and smooth APIs
				</li>
				<li>
					<span className='text-primary'>Deploy & Support:</span> Launch
					reliable web apps and provide ongoing support.
				</li>
			</ul>
			<br />
			<p className='text-secondary'>
				I aim for smooth collaboration, clear communication, and results you can
				trust.
			</p>
		</div>
	)
}

export default Approach
