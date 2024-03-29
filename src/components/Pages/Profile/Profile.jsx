import LogoutButton from '../../Elements/LogoutButton/LogoutButton';
import './Profile.scss';

const Profile = () => {
	return (
		<section id='profile'>
			<div className='profile__wrapper'>
				<h1>USER PROFILE</h1>
				<LogoutButton />
			</div>
		</section>
	);
};

export default Profile;
