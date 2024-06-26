'use client';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import loginImg from '../../public/asset/login_img.jpg';
import Pattern from '../../public/asset/pattern.png';

import { UserInfo } from '../type/UserInfo';
import { userDB, userDBType } from '@/data/userDB';
import Home from './Home';

type SetUserInfoType = (userinfo: UserInfo) => void;
interface LoginProps {
	userinfo: UserInfo;
	setUserInfo: SetUserInfoType;
	userinformation: userDBType;
	setuserInformation: Function;
	isvalid: boolean;
	setisvalid: Function;
	firstshowing: boolean;
	secondshowing: boolean;
	thirdshowing: boolean;
	fourthshowing: boolean;
	setfirstshowing: Function;
	fifthshowing: boolean;
	setfifthshowing: Function;
	setsecondshowing: Function;
	setthirdshowing: Function;
	setfourthshowing: Function;
}
const Register: React.FC<LoginProps> = ({
	userinfo,
	setUserInfo,
	userinformation,
	setuserInformation,
	isvalid,
	setisvalid,
	firstshowing,
	secondshowing,
	thirdshowing,
	fourthshowing,
	setfirstshowing,
	setsecondshowing,
	setthirdshowing,
	setfourthshowing,
	fifthshowing,
	setfifthshowing,
}) => {
	useEffect(() => {
		const storedValue = localStorage.getItem('userInformation');
		const state = localStorage.getItem('infoState');
		const first = localStorage.getItem('firstshowing');
		const second = localStorage.getItem('secondshowing');
		const third = localStorage.getItem('thirdshowing');
		const fourth = localStorage.getItem('fourthshowing');
		if (storedValue && state && first && second && third && fourth) {
			setUserInfo(JSON.parse(storedValue));
			setisvalid(JSON.parse(state));
			setfirstshowing(JSON.parse(first));
			setsecondshowing(JSON.parse(second));
			setthirdshowing(JSON.parse(third));
			setfourthshowing(JSON.parse(fourth));
		}
	}, []);

	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const [confirmpassword, setconfirmpassword] = useState('');
	const [firstNameError, setfirstNameError] = useState('');
	const [LastNameError, setLastNameError] = useState('');
	const [emailError, setemailError] = useState('');
	const [passwordError, setpasswordError] = useState('');
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const validateForm = () => {
		// Return true if form is valid, false otherwise
		return (
			firstName.length >= 4 &&
			email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
			password.length >= 8 &&
			password === confirmpassword
		);
	};

	// form checker
	function testFields(fieldName: string, seterror: Function, location: string) {
		if (fieldName === '') {
			seterror(`${location} cannot be empty`);
		} else if (fieldName.length <= 3) {
			seterror(`${location} cannot be less than 4 characters`);
		} else {
			seterror('');
		}
		// initial further email test
		testEmail();
		testPassword();
	}
	// test email format
	function testEmail() {
		if (emailRegex.test(email)) {
			setemailError('');
		} else {
			setemailError('Please enter a valid email address.');
		}
	}
	// test Password
	function testPassword() {
		if (password.length < 8) {
			setpasswordError('Password cannot be less than 8 characters');
		} else if (password !== confirmpassword) {
			setpasswordError('Password did not match with confirm password');
		}
	}
	// function to clear field
	function clearField() {
		setfirstName('');
		setlastName('');
		setemail('');
		setpassword('');
		setconfirmpassword('');
	}
	// submit function
	function formSubmit() {
		if (userinfo !== undefined && userinfo !== null) {
			setUserInfo({
				fname: firstName,
				lname: lastName,
				mail: email,
				pword: password,
			});
		} else {
			console.log('hello');
		}
		// Validate the form
		const formIsValid = validateForm();
		if (formIsValid) {
			// If form is valid, set isValid to true and redirect
			setisvalid(true);
			clearField();
		} else {
			// If form is not valid, set isValid to false
			setisvalid(false);
		}
	}
	if (!isvalid) {
		return (
			<div className='relative'>
				<Image
					src={Pattern}
					alt='pattern'
					className='absolute top-0 left-0 w-[100%] -z-10 h-[100vh]'
				/>
				<Navbar
					userinfo={userinfo}
					setUserInfo={setUserInfo}
					isValid={isvalid}
					setisValid={setisvalid}
				/>
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[1px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex items-start overflow-hidden z-50 md:bg-white'>
					{/* the left side of login */}
					<div className='img w-[40%]  h-full md:block hidden'>
						<Image
							src={loginImg}
							alt='login Image'
							className='w-full object-cover h-full'
						/>
					</div>
					{/* the form side */}
					<div className='form px-[16px] md:py-[40px] md:w-[60%] w-full md:overflow-y-scroll h-full flex justify-start flex-col'>
						<h2 className='text-2xl font-semibold text-center md:mb-[16px] mb-[8px] '>
							Register
						</h2>
						<p className=' text-center font-medium'>
							Transform Your Career with Our AI-Powered CV Builder! Sign Up Now
							to Effortlessly Create a Standout CV in Minutes. Let AI Help You
							Land Your Dream Job and Shine in the Job Market!
						</p>
						<div className='mainForm h-full'>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									formSubmit();
								}}
								action='/'
								className='w-full mt-[32px] md:pb-0 pb-[50px] h-full'>
								<div className=''>
									<input
										type='text'
										placeholder='Enter your First Name'
										required
										value={firstName}
										onChange={(e) => setfirstName(e.target.value)}
									/>
									<p className='text-sm'>{firstNameError}</p>
								</div>
								<div className=''>
									<input
										type='text'
										placeholder='Enter your Last Name'
										required
										value={lastName}
										onChange={(e) => setlastName(e.target.value)}
									/>
									<p className='text-sm'>{LastNameError}</p>
								</div>
								<div className=''>
									<input
										type='email'
										required
										value={email}
										placeholder='Enter your Email'
										onChange={(e) => setemail(e.target.value)}
									/>
									<p className='text-sm'>{emailError}</p>
								</div>
								<div className=''>
									<input
										type='Password'
										placeholder='Enter your Password'
										required
										value={password}
										onChange={(e) => setpassword(e.target.value)}
									/>
									<p className='text-sm'>{passwordError}</p>
								</div>
								<div className=''>
									<input
										type='Password'
										placeholder='Confirm your Password'
										required
										value={confirmpassword}
										onChange={(e) => setconfirmpassword(e.target.value)}
									/>
								</div>

								<input
									type='submit'
									className='bg-[var(--primary)] text-white mt-[16px]'
									onClick={(e) => {
										// check if firstName
										testFields(firstName, setfirstNameError, 'First name');
										// check lastName
										testFields(lastName, setLastNameError, 'Last name');
										// check email
										testFields(email, setemailError, 'Email');
										// check password
										testFields(password, setpasswordError, 'Password');
										setUserInfo({
											fname: firstName,
											lname: lastName,
											mail: email,
											pword: password,
										});
									}}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (isvalid) {
		return (
			<Home
				userinfo={userinfo}
				isValid={isvalid}
				setisValid={setisvalid}
				setUserInfo={setUserInfo}
				userInformation={userinformation}
				setuserInformation={setuserInformation}
				firstshowing={firstshowing}
				secondshowing={secondshowing}
				thirdshowing={thirdshowing}
				fourthshowing={fourthshowing}
				setfirstshowing={setfirstshowing}
				setsecondshowing={setsecondshowing}
				setthirdshowing={setthirdshowing}
				setfourthshowing={setfourthshowing}
				fifthshowing={fifthshowing}
				setfifthshowing={setfifthshowing}
			/>
		);
	}
};

export default Register;
