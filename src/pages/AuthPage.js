import { Fragment, createRef, useState } from 'react'
import styles from '../styles/Auth.module.css'

const AuthPage = () => {
	const signinEmailRef = createRef()
	const signinPasswordRef = createRef()
	const signupFirstNameRef = createRef()
	const signupLastNameRef = createRef()
	const signupEmailRef = createRef()
	const signupPasswordRef = createRef()

	const [onLogin, setOnLogin] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')	

	const submitForm = async e => {
		e.preventDefault()
		if (onLogin) {
			try {
				const reqBody = {
					email: signinEmailRef.current.value,
					password: signinPasswordRef.current.value
				}
				const url = 'http://localhost:5000/auth/login'
				const response = await fetch(url, {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(reqBody)
				})
				const resData = await response.json()
				console.log('resData', resData)
				if (resData.errors.length > 0) {
					console.log(resData.errors[0].msg)
					setErrorMessage(resData.errors[0].msg)
				}
			} catch (err) {
				console.error(err)
			}
		} else {
			try {
				const reqBody = {
					firstName: signupFirstNameRef.current.value,
					lastName: signupLastNameRef.current.value,
					email: signupEmailRef.current.value,
					password: signupPasswordRef.current.value
				}
				const url = 'http://localhost:5000/auth/register'
				const response = await fetch(url, {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(reqBody)
				})
				const resData = await response.json()
				console.log('resData', resData)
				if (resData.errors.length > 0) {
					console.log(resData.errors[0].msg)
					setErrorMessage(resData.errors[0].msg)
				}
			} catch (err) {
				console.error(err)
			}
		}
	}

	return (
		<div className={styles.container}>
			<form onSubmit={submitForm}>
				<div className={styles.loginForm}>
					<div className={styles.signUpLoginContainer}>
						<button
							className={[
								styles.formToggle,
								onLogin ? styles.unselectedForm : styles.selectedForm,
							].join(' ')}
							onClick={e => {
								e.preventDefault()
								signinEmailRef.current.value = ''
								signinPasswordRef.current.value = ''
								setErrorMessage('')
								setOnLogin(false)
							}}
						>
              Sign Up
						</button>
						<button
							className={[
								styles.formToggle,
								onLogin ? styles.selectedForm : styles.unselectedForm,
							].join(' ')}
							onClick={e => {
								e.preventDefault()
								signupFirstNameRef.current.value = ''
								signupLastNameRef.current.value = ''
								signupEmailRef.current.value = ''
								signupPasswordRef.current.value = ''
								setErrorMessage('')
								setOnLogin(true)
							}}
						>
              Sign In
						</button>
					</div>
					{onLogin ? (
						<Fragment>
							<p className={styles.signUpLoginText}>
						Sign In
							</p>
							<p className={styles.errorMessage}>{errorMessage}</p>
							<input type='email' 
								className={styles.textInput}
								placeholder='Email Address'
								ref={signinEmailRef}
								required={true}
							/>
							<br />
							<input
								type='password'
								className={styles.textInput}
								placeholder='Password'
								ref={signinPasswordRef}
								required={true}
								minLength={8}
							/>
							<br />	
							<p className={styles.forgotPasswordButton}>Forgot Password?</p>
							<div className={styles.fillerSpace}></div>
							<button className={styles.loginRegisterButton}>
						Sign In
							</button>
						</Fragment>
					) : (
						<Fragment>
							<p className={styles.signUpLoginText}>
						Sign Up
							</p>
							<p className={styles.errorMessage}>{errorMessage}</p>
							<input 
								type='text'
								className={styles.textInput}
								placeholder='First Name'
								ref={signupFirstNameRef}
								required={true}
							/>
							<br />
							<input 
								type='text'
								className={styles.textInput}
								placeholder='Last Name'
								ref={signupLastNameRef}
								required={true}
							/>
							<br />
							<input 
								type='email'
								className={styles.textInput}
								placeholder='Email'
								ref={signupEmailRef}
								required={true}
							/>
							<br />
							<input 
								type='password'
								className={styles.textInput}
								placeholder='password'
								ref={signupPasswordRef}
								required={true}
							/>
							<div className={styles.fillerSpace}></div>
							<button className={styles.loginRegisterButton}>
						Sign Up
							</button>
						</Fragment>
					)}
				</div>
			</form>
		</div>
	)
}

export default AuthPage
