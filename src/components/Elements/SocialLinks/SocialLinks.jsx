import './SocialLinks.scss';

const SocialLinks = () => {
  const links = ['instagram', 'facebook', 'pinterest', 'youtube', 'twitter', 'linkedin', 'whatsapp'];

  return(
    <div className='social__wrapper'>
      {links.map((link, index) => (
        <a href='#'>
          <img src={process.env.PUBLIC_URL + `/assets/icons/${link}.svg`} alt={link} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
