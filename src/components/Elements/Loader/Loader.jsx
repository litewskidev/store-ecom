import Loading from '../Loading/Loading.jsx';
import './Loader.scss';

const Loader = ({ loading }) => {
	return (
		<aside
			id='loader'
			className={`loader__wrapper ${loading ? 'loading' : ''}`}>
			<Loading />
		</aside>
	);
};

export default Loader;
