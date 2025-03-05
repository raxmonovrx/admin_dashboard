import { useEffect, useState } from 'react'

const Layout = ({ children }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return (
		<div>
			<div className='flex p-2 flex-1'>
				<div
					className={`${
						isMobile ? 'ml-0' : 'ml-72'
					} transition-all duration-300`}
				></div>

				<div className='w-full h-[calc(100vh-110px)] overflow-auto'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Layout
