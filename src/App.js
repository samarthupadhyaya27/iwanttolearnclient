import './App.module.css'
import { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from './pages/reusableComponents/NavigationBar'
import Dashboard from './pages/Dashboard'
import AuthPage from './pages/AuthPage'

import HomePage from './pages/HomePage'

const App = () => {
	return (
		<Fragment>
			<Router>
				<NavigationBar />
				<Switch>
					<Route path="/login">
						<AuthPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</Fragment>
	)
}

const Public = () => {
	return (
		<Fragment></Fragment>
	)
}

const Protected = () => {
	return (
		<Fragment></Fragment>
	)
}

const Login = () => {
	return (
		<Fragment></Fragment>
	)
}

export default App
