import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import './HomeHalf.scss'

const HomeHalf = () => {
	const heroHalfMenu = useMemo(
		() => [
			{
				href: '/categories/women-watches',
				image: 'img_21',
				title: 'PICKS FOR HER',
				action: 'SHOP NOW',
			},
			{
				href: '/categories/men-watches',
				image: 'img_22',
				title: 'PICKS FOR HIM',
				action: 'SHOP NOW',
			},
		],
		[],
	)

	return (
		<div className='heroHalf__wrapper'>
			{heroHalfMenu.map((tile, index) => (
				<NavLink to={tile.href} className='heroHalf__tile' key={index}>
					<img
						src={process.env.PUBLIC_URL + `/assets/images/${tile.image}.webp`}
						alt={tile.title}
					/>
					<div className='heroHalf__tile__info'>
						<h3>{tile.title}</h3>
						<p>&middot;</p>
						<p>{tile.action}</p>
					</div>
				</NavLink>
			))}
		</div>
	)
}

export default HomeHalf
