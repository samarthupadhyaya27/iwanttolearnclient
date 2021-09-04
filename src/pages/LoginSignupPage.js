// import { useState, useRef } from 'react'
// import { Fragment } from 'react'
// import styles from '../styles/LoginSignup.module.css'

// const LoginSignupPage = () => {
// 	const signinEmailRef = useRef()
// 	const signinPasswordRef = useRef()
// 	const signupFirstNameRef = useRef()
// 	const signupLastNameRef = useRef()
// 	const signupEmailRef = useRef()
// 	const signupPasswordRef = useRef()
// 	const [onLogin, setOnLogin] = useState(false)
// 	// console.log('emailFirstNameRef.current.value', emailFirstNameRef.current.value)
// 	const onSubmit = async e => {
// 		e.preventDefault()
// 		if (onLogin) {
// 			const reqBody = {
// 				email: signinEmailRef.current.value, 
// 				password: signinPasswordRef
// 				.current.value 
// 			}
// 			console.log(reqBody)
// 			const url = 'http://localhost:3001/login'
// 			const response = await fetch(url, {
// 				method: 'POST',
// 				mode: 'cors',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify(reqBody)
// 			})
// 			const resData = response.json()
// 			console.log(resData)
// 		}
// 	}

// 	return (
// 		<div className={styles.container}>
// 			<form onSubmit={e => {onSubmit(e)}}>
// 				<div className={styles.loginForm}>
// 					<div className={styles.signUpLoginContainer}>
// 						<button
// 							className={[
// 								styles.formToggle,
// 								onLogin ? styles.unselectedForm : styles.selectedForm,
// 							].join(' ')}
// 							onClick={e => {
// 								e.preventDefault()
// 								setOnLogin(false)
// 							}}
// 						>
//               Sign Up
// 						</button>
// 						<button
// 							className={[
// 								styles.formToggle,
// 								onLogin ? styles.selectedForm : styles.unselectedForm,
// 							].join(' ')}
// 							onClick={e => {
// 								e.preventDefault()
// 								setOnLogin(true)
// 							}}
// 						>
//               Log In
// 						</button>
// 					</div>
// 					<p className={styles.signUpLoginText}>
// 						{onLogin ? 'Log In' : 'Sign Up'}
// 					</p>

// 					<input
// 						type={onLogin ? 'email' : 'text'}
// 						className={styles.textInput}
// 						placeholder={onLogin ? 'Email Address' : 'First Name'}
// 						ref={emailFirstNameRef}
// 						required={true}
// 					/>
// 					<br />
// 					{onLogin ? (
// 						<Fragment></Fragment>
// 					) : (
// 						<Fragment>
// 							<input
// 								type="text"
// 								className={styles.textInput}
// 								placeholder="Last Name"
// 								ref={lastNameRef}
// 								required={true}
// 							/>
// 							<br />
// 						</Fragment>
// 					)}
// 					<input
// 						type={onLogin ? 'password' : 'email'}
// 						className={styles.textInput}
// 						placeholder={onLogin ? 'Password' : 'Email Address'}
// 						ref={passwordEmailRef}
// 						required={true}
// 						minLength={8}
// 					/>
// 					{onLogin ? (
// 						<Fragment></Fragment>
// 					) : (
// 						<Fragment>
// 							<br />
// 							<input
// 								type="password"
// 								className={styles.textInput}
// 								placeholder="Password"
// 								ref={passwordRef}
// 								required={true}
// 							/>
// 						</Fragment>
// 					)}
// 					{onLogin ? (
// 						<Fragment>
// 							<p className={styles.forgotPasswordButton}>Forgot Password?</p>
// 							<br />
// 							<br />
// 							<br />
// 							<br />
// 						</Fragment>
// 					) : (
// 						<Fragment></Fragment>
// 					)}
// 					<br />
// 					<div className={styles.fillerSpace}></div>
// 					<button className={styles.loginRegisterButton}>
// 						{onLogin ? 'Log In' : 'Sign Up'}
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	)
// }

// export default LoginSignupPage
