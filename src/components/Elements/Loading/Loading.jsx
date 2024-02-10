import './Loading.scss';

const Loading = () => {
	return (
		<div className='loading__wrapper'>
			<div className='loading__frame'>
				<div className='loading__clock'>
					<div className='loading__clock__longhand'></div>
					<div className='loading__clock__shorthand'></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
