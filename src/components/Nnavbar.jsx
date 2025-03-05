import React, { useState } from 'react'
import ProfileImg from '/image/contact_img.svg'

export default function NavbarAvatar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5'>
			<div className='relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]'>
				<nav
					aria-label='main navigation'
					className='flex h-[5.5rem] items-center justify-between font-medium text-slate-700'
				>
					<div className='ml-auto flex gap-4 items-center px-6 lg:p-0 relative'>
						<img
							src={ProfileImg}
							alt='user name'
							title='user name'
							width={57}
							height={57}
							className='max-w-full rounded-full cursor-pointer'
						/>
						<div
							className='flex items-center gap-2 cursor-pointer relative'
							onClick={() => setIsOpen(!isOpen)}
						>
							<div>
								<h4 className='font-bold text-[16px]'>Franklin Jr.</h4>
								<p className='font-light text-sm'>Super Admin</p>
							</div>

							<div
								className={`transform transition-transform ${
									isOpen ? 'rotate-180' : ''
								}`}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='size-6'
								>
									<path
										fillRule='evenodd'
										d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</div>

						{/* Dropdown Menu */}
						{isOpen && (
							<div className='absolute right-0 mt-20 w-30 bg-white border rounded-lg shadow-md'>
								<button
									className='w-full px-4 py-2 text-left text-slate-700 hover:bg-gray-100 rounded-md cursor-pointer'
									onClick={() => setIsOpen(false)}
								>
									Logout
								</button>
							</div>
						)}
					</div>
				</nav>
			</div>
		</header>
	)
}
