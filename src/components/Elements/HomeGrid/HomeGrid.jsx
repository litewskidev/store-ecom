import { NavLink } from 'react-router-dom'
import './HomeGrid.scss'

const HomeGrid = () => {
	return (
		<div className='stickyHalf__wrapper'>
			<div className='stickyHalf__container'>
				<NavLink to='/brands/breitling' className='stickyHalf__info'>
					<div className='stickyHalf__info__inner'>
						<h3>SINCE 1884</h3>
						<p>
							Discover the epitome of Swiss craftsmanship and cutting-edge
							design with Breitling, a renowned brand synonymous with precision
							and luxury in the world of watches.
						</p>
						<p>SHOP BREITLING</p>
					</div>
				</NavLink>
				<div className='stickyHalf__image'>
					<img
						src={process.env.PUBLIC_URL + '/assets/images/img_10.webp'}
						alt=''
					/>
				</div>
			</div>
			<div className='stickyHalf__container half__bottom'>
				<div className='stickyHalf__image'>
					<img
						src={process.env.PUBLIC_URL + '/assets/images/img_11.webp'}
						alt=''
					/>
				</div>
				<NavLink to='/brands/rolex' className='stickyHalf__info'>
					<div className='stickyHalf__info__inner'>
						<h3>SINCE 1905</h3>
						<p>
							Indulge in the epitome of luxury and prestige with Rolex, a brand
							synonymous with excellence, innovation, and enduring style.
						</p>
						<p>SHOP ROLEX</p>
					</div>
				</NavLink>
			</div>
		</div>
	)
}

export default HomeGrid
