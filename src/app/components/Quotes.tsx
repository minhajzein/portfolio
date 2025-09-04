'use client'

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

function Quotes() {
	return (
		<div className='flex px-[16px] md:px-[170px] py-[30px]'>
			<div className='flex flex-col m-auto items-end'>
				<div className='border p-[12px] relative'>
					<ImQuotesLeft className='bg-background absolute top-0 left-[12px] p-[4px] -translate-y-1/2' />
					<h1 className='text-[16px] md:text-[24px] p-[12px]'>
						With great power comes great electricity bill
					</h1>
					<ImQuotesRight className='bg-background absolute bottom-0 text-[24px] right-[12px] p-[4px] translate-y-1/2' />
				</div>
				<div className='text-[16px] md:text-[24px] border p-[12px]'>
					<h1>- Dr. Who</h1>
				</div>
			</div>
		</div>
	)
}

export default Quotes
