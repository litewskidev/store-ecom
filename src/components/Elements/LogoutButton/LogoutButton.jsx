import { useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '../../../redux/slices/authApiSlice.js';
import './LogoutButton.scss';

const LogoutButton = () => {
	const navigate = useNavigate();
	const [logoutUser] = useLogoutUserMutation();

	const handleLogout = () => {
		logoutUser();
		navigate('/');
	};

	return <button onClick={handleLogout}>Log Out</button>;
};

export default LogoutButton;
