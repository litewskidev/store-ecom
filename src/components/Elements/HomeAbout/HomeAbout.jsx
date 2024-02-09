import { NavLink } from 'react-router-dom'
import './HomeAbout.scss'

const HomeAbout = () => {
	return (
		<div className='heroAbout__wrapper'>
			<NavLink to='/about'>
				<div className='heroAbout__container'>
					<div className='heroAbout__info'>
						<p>THE VALUE</p>
						<h1>CULTURE</h1>
						<p>
							Our ethos is deeply intertwined with our journey that extends
							beyond geographical origins. From our humble beginnings to our
							present story, we embrace the essence of diverse influences,
							uniting in a commitment to quality, authenticity, and respect for
							heritage.
						</p>
					</div>
					<div className='heroAbout__image'>
						<img
							src={process.env.PUBLIC_URL + '/assets/images/img_20.webp'}
							alt=''
						/>
					</div>
					<div className='heroAbout__action'>
						<p>EXPLORE</p>
						<p>&middot;</p>
						<p>ABOUT US</p>
					</div>
				</div>
			</NavLink>
		</div>
	)
}

export default HomeAbout
