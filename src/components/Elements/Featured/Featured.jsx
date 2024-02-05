import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import './Featured.scss';

const Featured = () => {

  const featuredMenu = useMemo(() => (
    [
      {
        category: '',
        title: 'BEST SELLERS',
        action: 'SHOP',
        href: '/categories/best-sellers'
      },
      {
        category: '',
        title: 'SALE',
        action: 'SHOP',
        href: '/categories/sale'
      },
      {
        category: '',
        title: 'COMING SOON',
        action: 'SHOP',
        href: '/categories/coming-soon'
      },
      {
        category: 'COLLECTION',
        title: 'DAILY DRIVERS',
        action: 'SHOP',
        href: '/collections/daily-drivers'
      },
      {
        category: 'COLLECTION',
        title: 'THE HOLY TRINITY',
        action: 'SHOP',
        href: '/collections/the-holy-trinity'
      },
      {
        category: 'COLLECTION',
        title: 'STAFF PICKS',
        action: 'SHOP',
        href: '/collections/staff-picks'
      }
    ]
  ), [])

  return(
    <div className='featured__wrapper'>
      {featuredMenu.map((tile, index) => (
        <NavLink to={tile.href} key={index}>
          <div className='featured__tile'>
            <img src={process.env.PUBLIC_URL + `/assets/images/tiles/tile_${index + 1}.webp`} alt=''/>
            <div className='featured__tile__info'>
              <p>{tile?.category}</p>
              <h2>{tile.title}</h2>
              <p>&middot;</p>
              <p>{tile.action}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Featured;
