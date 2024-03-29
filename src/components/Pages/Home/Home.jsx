import Container from '../../Elements/Container/Container.jsx';
import HomeHero from '../../Elements/HomeHero/HomeHero.jsx';
import HomeNew from '../../Elements/HomeNew/HomeNew.jsx';
import HomeTiles from '../../Elements/HomeTiles/HomeTiles.jsx';
import HomeAbout from '../../Elements/HomeAbout/HomeAbout.jsx';
import HomeGrid from '../../Elements/HomeGrid/HomeGrid.jsx';
import HomeHalf from '../../Elements/HomeHalf/HomeHalf.jsx';
import HomeStaff from '../../Elements/HomeStaff/HomeStaff.jsx';
import HomeStores from '../../Elements/HomeStores/HomeStores.jsx';
import HomeBrands from '../../Elements/HomeBrands/HomeBrands.jsx';
import HomeSocial from '../../Elements/HomeSocial/HomeSocial.jsx';
import HomeBenefit from '../../Elements/HomeBenefit/HomeBenefit.jsx';
import './Home.scss';

const Home = () => {
	return (
		<section id='home'>
			<Container>
				<HomeHero />
				<HomeNew />
				<HomeTiles />
				<div>
					<HomeAbout />
					<HomeGrid />
					<HomeHalf />
					<HomeStaff />
				</div>
				<HomeStores />
				<HomeBrands />
				<HomeSocial />
				<HomeBenefit />
			</Container>
		</section>
	);
};

export default Home;
