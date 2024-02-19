import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useWindowLocation = (setWindowPage, page) => {
  const location = useLocation();

	useEffect(() => {
		setWindowPage(location.pathname === page);
		window.scrollTo(0, 0);
	}, [location, setWindowPage, page]);
};

export default useWindowLocation;
