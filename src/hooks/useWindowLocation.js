import { useEffect } from 'react'

const useWindowLocation = (location, setIsHomePage, setIsProductPage) => {
	useEffect(() => {
		setIsHomePage(location.pathname === '/')
		setIsProductPage(location.pathname.includes('/watches/'))
		window.scrollTo(0, 0)
	}, [location, setIsHomePage, setIsProductPage])
}

export default useWindowLocation
