import styles from '../../styles/NavigationBar.module.css'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
	return (
		<div className={styles.navigationBar}>
			<NavLink to="/">Home</NavLink>
			<div className={styles.navBarSpace}></div>
			<NavLink to="/login">Sign In / Sign Up</NavLink>
		</div>
	)
}

export default NavigationBar
