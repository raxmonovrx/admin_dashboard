import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CardContact from './components/Card'
import NavbarAvatar from './components/Nnavbar'
import SideNavigationSeparator from './components/SideNavbar'
import Analytics from './layouts/Analytics'
import Dashboard from './layouts/Dashboard'
import DataSourses from './layouts/DataSourses'
import Layout from './layouts/Layout'
import Notifications from './layouts/Notifications'

const App = () => {
	return (
		<Router>
			<div className='max-w-[1680px] mx-auto relative bg-[#F9F9F9] h-screen flex flex-col select-none'>
				<SideNavigationSeparator />
				<NavbarAvatar />
				<Layout>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/analytics' element={<Analytics />} />
						<Route path='/data-sources' element={<DataSourses />} />
						<Route path='/notifications' element={<Notifications />} />
						<Route path='/contacts' element={<CardContact />} />
					</Routes>
				</Layout>
			</div>
		</Router>
	)
}

export default App
