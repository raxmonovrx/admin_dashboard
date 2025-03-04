import { useEffect, useState } from 'react'
import Card from './components/Card'
import NavbarAvatar from './components/Nnavbar'
import SideNavigationSeparator from './components/SideNavbar'

const App = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className='max-w-[1680px] mx-auto relative bg-[#F9F9F9] h-screen flex flex-col'>
			<SideNavigationSeparator />
			<NavbarAvatar />

			<div className='flex p-2 flex-1'>
				<div
					className={`${
						isMobile ? 'ml-0' : 'ml-72'
					} transition-all duration-300`}
				></div>

				{/* Scroll faqat Card containerida bo'ladi */}
				<div className='w-full h-[calc(100vh-110px)] overflow-auto'>
					<Card />
				</div>
			</div>
		</div>
	)
}

export default App
