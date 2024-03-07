import { motion } from 'framer-motion';
import './Transition.scss';

const Transition = Children => {
	return (
		<>
			<Children />
			<motion.div
				className='slide__in'
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>
			<motion.div
				className='slide__out'
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>
		</>
	);
};

export default Transition;
