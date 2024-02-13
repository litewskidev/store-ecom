import HomeHero from '../../Elements/HomeHero/HomeHero.jsx';
import HomeNew from '../../Elements/HomeNew/HomeNew.jsx';
import HomeTiles from '../../Elements/HomeTiles/HomeTiles.jsx';
import HomeAbout from '../../Elements/HomeAbout/HomeAbout.jsx';
import HomeGrid from '../../Elements/HomeGrid/HomeGrid.jsx';
import HomeHalf from '../../Elements/HomeHalf/HomeHalf.jsx';
import HomeSingle from '../../Elements/HomeSingle/HomeSingle.jsx';
import HomeBrands from '../../Elements/HomeBrands/HomeBrands.jsx';
import HomeBenefit from '../../Elements/HomeBenefit/HomeBenefit.jsx';
import HomeSocial from '../../Elements/HomeSocial/HomeSocial.jsx';

const Home = () => {
	return (
		<section id='home'>
			<HomeHero />
			<HomeNew />
			<HomeTiles />
			<HomeAbout />
			<HomeGrid />
			<HomeHalf />
			<HomeSingle id={'65b72a22401c069a89d84092'} />
			<HomeBrands />
			<HomeSocial />
			<HomeBenefit />
		</section>
	);
};

export default Home;
