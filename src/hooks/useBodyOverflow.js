import { useLayoutEffect } from 'react';

const useBodyOverflow = bodyOverflowHidden => {
	useLayoutEffect(() => {
		document.body.style.overflow = bodyOverflowHidden ? 'hidden' : 'scroll';
	}, [bodyOverflowHidden]);
};

export default useBodyOverflow;
