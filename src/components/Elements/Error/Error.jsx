import './Error.scss'

const Error = ({ children }) => {
	return (
		<div className='error__wrapper'>
			<p>{children}</p>
		</div>
	)
}

export default Error
