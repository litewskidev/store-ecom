import { useLayoutEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from './components/Elements/Loader/Loader.jsx'
import Navbar from './components/Elements/Navbar/Navbar.jsx'
import Newsletter from './components/Elements/Newsletter/Newsletter.jsx'
import Footer from './components/Elements/Footer/Footer.jsx'
import './styles/global.scss'

const App = () => {
	const [isLoading, setIsLoading] = useState(true)

	useLayoutEffect(() => {
		const handleLoad = () => {
			setIsLoading(false)
		}

		if (document.readyState === 'complete') {
			handleLoad()
		} else {
			window.addEventListener('load', handleLoad)
		}

		return () => {
			window.removeEventListener('load', handleLoad)
		}
	}, [])

	return (
		<main id='main'>
			<Loader loading={isLoading} />
			<Navbar />
			<div>
				<Outlet />
			</div>
			<Newsletter />
			<Footer />
		</main>
	)
}

export default App
