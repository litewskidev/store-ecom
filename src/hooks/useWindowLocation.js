import { useEffect } from 'react';

const useWindowLocation = (location, setIsHomePage) => {
	useEffect(() => {
		setIsHomePage(location.pathname === '/');
		window.scrollTo(0, 0);
	}, [location, setIsHomePage]);
};

export default useWindowLocation;
