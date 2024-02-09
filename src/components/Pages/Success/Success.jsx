import { useNavigate } from 'react-router-dom'
import './Success.scss'

const Success = () => {
	const navigate = useNavigate()

	return (
		<section id='success'>
			<div className='success__wrapper'>
				<div className='success__title'>
					<h1>Success!</h1>
				</div>
				<div className='success__desc'>
					<p>Your order is being prepared. Thank you for choosing Culture.</p>
				</div>
				<div className='success__backBtn' onClick={() => navigate('/')}>
					<p>Back</p>
				</div>
			</div>
		</section>
	)
}

export default Success
