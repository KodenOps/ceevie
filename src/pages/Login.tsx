'use client';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React, { useState } from 'react';
import loginImg from '../../public/asset/login_img.jpg';
import Pattern from '../../public/asset/pattern.png';
const Login = () => {
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
	return (
		<div className='relative'>
			<Image
				src={Pattern}
				alt='pattern'
				className='absolute top-0 left-0 w-[100%] -z-10 h-[100vh]'
			/>
			<Navbar />
			<div className='loginWrapper md:w-[60vw] w-full md:h-[70vh] md:border-[1px] border-[#e8e8e8] md:mx-[20%]   rounded-lg flex items-start overflow-hidden z-50 md:bg-white'>
				{/* the left side of login */}
				<div className='img w-[40%]  h-full md:block hidden'>
					<Image
						src={loginImg}
						alt='login Image'
						className='w-full object-cover h-full'
					/>
				</div>
				{/* the form side */}
				<div className='form px-[16px] md:py-[40px] md:w-[60%] w-full '>
					<h2 className='text-2xl font-semibold text-center md:mb-[16px] mb-[8px] '>
						Register
					</h2>
					<p className=' text-center font-medium'>
						Transform Your Career with Our AI-Powered CV Builder! Sign Up Now to
						Effortlessly Create a Standout CV in Minutes. Let AI Help You Land
						Your Dream Job and Shine in the Job Market!
					</p>
					<div className='mainForm'>
						<form
							// onSubmit={formSubmit}
							action='/'
							className='w-full mt-[32px]'>
							<div className=''>
								<input
									type='text'
									placeholder='Enter your First Name'
									required
									onChange={(e) => setfirstName(e.target.value)}
								/>
								<p className='text-sm'>{firstNameError}</p>
							</div>
							<div className=''>
								<input
									type='text'
									placeholder='Enter your Last Name'
									required
									onChange={(e) => setlastName(e.target.value)}
								/>
								<p className='text-sm'>{LastNameError}</p>
							</div>
							<div className=''>
								<input
									type='email'
									required
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
									onChange={(e) => setpassword(e.target.value)}
								/>
								<p className='text-sm'>{passwordError}</p>
							</div>
							<div className=''>
								<input
									type='Password'
									placeholder='Confirm your Password'
									required
									onChange={(e) => setconfirmpassword(e.target.value)}
								/>
							</div>

							<input
								type='submit'
								className='bg-[var(--primary)] text-white mt-[16px]'
								onClick={(e) => {
									e.preventDefault();
									// check if firstName
									testFields(firstName, setfirstNameError, 'First name');
									// check lastName
									testFields(lastName, setLastNameError, 'Last name');
									// check email
									testFields(email, setemailError, 'Email');
									// check password
									testFields(password, setpasswordError, 'Password');
								}}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
