import React, { useState } from 'react'

import Kleon_logo from '/icons/kleon_logo_01.svg'

export default function SideNavigationSeparator() {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false)

	return (
		<>
			<button
				title='Side navigation'
				type='button'
				className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded  opacity-100 lg:hidden ${
					isSideNavOpen
						? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 '
						: ''
				}`}
				aria-haspopup='menu'
				aria-label='Side navigation'
				aria-expanded={isSideNavOpen ? ' true' : 'false'}
				aria-controls='nav-menu-2'
				onClick={() => setIsSideNavOpen(!isSideNavOpen)}
			>
				<div className='absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform'>
					<span
						aria-hidden='true'
						className='absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300'
					></span>
					<span
						aria-hidden='true'
						className='absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300'
					></span>
					<span
						aria-hidden='true'
						className='absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300'
					></span>
				</div>
			</button>

			{/*  <!-- Side Navigation --> */}
			<aside
				id='nav-menu-2'
				aria-label='Side navigation'
				className={`absolute top-0 bottom-0 left-0 z-40 flex w-72 flex-col h-screen border-r border-r-slate-200 bg-white transition-transform duration-300 md:translate-x-0 ${
					isSideNavOpen ? 'translate-x-0' : ' -translate-x-full'
				}`}
			>
				<a
					aria-label='WindUI logo'
					className='flex items-center gap-2 whitespace-nowrap p-4.5 text-xl font-medium focus:outline-none'
					href='javascript:void(0)'
				>
					{/* logo */}
					<img src={Kleon_logo} alt='' />
				</a>
				<nav
					aria-label='side navigation'
					className='flex-1 divide-y divide-slate-100 overflow-auto'
				>
					<div>
						<ul className='flex flex-1 flex-col gap-1 py-3'>
							<li className='px-3'>
								<a
									href='#'
									className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 aria-[current=page]:bg-purple-50 aria-[current=page]:text-purple-600 '
								>
									<div className='flex items-center self-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='size-6'
										>
											<path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
											<path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
										</svg>
									</div>
									<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm'>
										Dashboard
									</div>
								</a>
							</li>
							<li className='px-3'>
								<a
									href='#'
									className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 aria-[current=page]:bg-purple-50 aria-[current=page]:text-purple-600 '
									aria-current='page'
								>
									<div className='flex items-center self-center '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='size-6'
										>
											<path
												fillRule='evenodd'
												d='M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z'
												clipRule='evenodd'
											/>
											<path
												fillRule='evenodd'
												d='M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm'>
										Analytics
									</div>
								</a>
							</li>
							<li className='px-3'>
								<a
									href='#'
									className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 aria-[current=page]:bg-purple-50 aria-[current=page]:text-purple-600 '
								>
									<div className='flex items-center self-center '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='size-6'
										>
											<path d='M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z' />
											<path d='M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z' />
											<path d='M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z' />
											<path d='M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z' />
										</svg>
									</div>
									<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm'>
										Data Sources
									</div>
								</a>
							</li>
							<li className='px-3'>
								<a
									href='#'
									className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 aria-[current=page]:bg-purple-50 aria-[current=page]:text-purple-600 '
								>
									<div className='flex items-center self-center '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='size-6'
										>
											<path
												fillRule='evenodd'
												d='M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm'>
										Notifications
									</div>
									<span className='inline-flex items-center justify-center rounded-full bg-purple-100-100 px-2 text-xs text-purple-600 '>
										2<span className='sr-only'> new notifications</span>
									</span>
								</a>
							</li>
							<li className='px-3'>
								<a
									href='#'
									className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 aria-[current=page]:bg-purple-50 aria-[current=page]:text-purple-600 '
								>
									<div className='flex items-center self-center '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='size-6'
										>
											<path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z' />
										</svg>
									</div>
									<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm'>
										User Management
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div>
						<ul className='flex flex-1 flex-col gap-1 py-3'>
							<li className='px-3'>
								<a
									href='#'
									className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 aria-[current=page]:bg-purple-50 aria-[current=page]:text-purple-600 '
								>
									<div className='flex items-center self-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='size-6'
										>
											<path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z' />
											<path
												fillRule='evenodd'
												d='m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm'>
										Documents
									</div>
								</a>
							</li>
							<li className='px-3'>
								<a
									href='#'
									className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 aria-[current=page]:bg-purple-50 aria-[current=page]:text-purple-600 '
								>
									<div className='flex items-center self-center '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='size-6'
										>
											<path d='M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z' />
											<path
												fillRule='evenodd'
												d='M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm'>
										Media & files
									</div>
								</a>
							</li>
							<li className='px-3'>
								<a
									href='#'
									className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 aria-[current=page]:bg-purple-50 aria-[current=page]:text-purple-600 '
								>
									<div className='flex items-center self-center '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='size-6'
										>
											<path
												fillRule='evenodd'
												d='M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm'>
										Backups
									</div>
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<footer className='border-t border-slate-200 p-3'>
					<a
						href='#'
						className='flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-purple-600 '
					>
						<div className='flex items-center self-center '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-6'
							>
								<path
									fillRule='evenodd'
									d='M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium'>
							Settings
						</div>
					</a>
				</footer>
			</aside>

			{/*  <!-- Backdrop --> */}
			<div
				className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors md:hidden ${
					isSideNavOpen ? 'block' : 'hidden'
				}`}
				onClick={() => setIsSideNavOpen(false)}
			></div>
			{/*  <!-- End Side navigation menu with content separator --> */}
		</>
	)
}
