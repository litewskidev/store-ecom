import './SearchModal.scss';

const SearchModal = ({ closeSearch }) => {
	return (
		<div className='searchModal__wrapper'>
			<div className='searchModal__header'>
				<h5>SEARCH MODAL</h5>
				<div className='searchModal__header__button' onClick={closeSearch}>
					<img
						src={process.env.PUBLIC_URL + '/assets/icons/close.svg'}
						alt='close button'
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchModal;
