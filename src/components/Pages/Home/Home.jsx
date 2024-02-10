import HomeHero from '../../Elements/HomeHero/HomeHero.jsx';
import HomeNew from '../../Elements/HomeNew/HomeNew.jsx';
import HomeTiles from '../../Elements/HomeTiles/HomeTiles.jsx';
import HomeAbout from '../../Elements/HomeAbout/HomeAbout.jsx';
import HomeGrid from '../../Elements/HomeGrid/HomeGrid.jsx';
import HomeHalf from '../../Elements/HomeHalf/HomeHalf.jsx';
import HomeBrands from '../../Elements/HomeBrands/HomeBrands.jsx';
import HomeBenefit from '../../Elements/HomeBenefit/HomeBenefit.jsx';

const Home = () => {
	return (
		<section id='home'>
			<HomeHero />
			<HomeNew />
			<HomeTiles />
			<HomeAbout />
			<HomeGrid />
			<HomeHalf />
			<HomeBrands />
      <HomeBenefit />
		</section>
	);
};

export default Home;
