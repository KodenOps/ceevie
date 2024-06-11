'use client';
import React, { useEffect, useState } from 'react';
import { UserInfo } from '../type/UserInfo';
import Navbar from '@/components/Navbar';
import { FaRegSmileBeam } from 'react-icons/fa';
import { secondarySchool, userDBType } from '@/data/userDB';
import { MdOutlineHdrPlus, MdPlusOne } from 'react-icons/md';
import { CiCirclePlus } from 'react-icons/ci';

const years: number[] = [
	2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
	2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999,
	1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990,
];

interface Props {
	userinfo: UserInfo;
	isValid: boolean;
	setisValid: Function;
	setUserInfo: Function;
	userInformation: userDBType;
	setuserInformation: Function;
	firstshowing: boolean;
	secondshowing: boolean;
	thirdshowing: boolean;
	fourthshowing: boolean;
	setfirstshowing: Function;
	setsecondshowing: Function;
	setthirdshowing: Function;
	setfourthshowing: Function;
}
const Home: React.FC<Props> = ({
	userinfo,
	isValid,
	setisValid,
	setUserInfo,
	userInformation,
	setuserInformation,
	firstshowing,
	secondshowing,
	thirdshowing,
	fourthshowing,
	setfirstshowing,
	setsecondshowing,
	setthirdshowing,
	setfourthshowing,
}) => {
	const [placeholder, setplaceholder] = useState('Enter Mobile Number');
	useEffect(() => {
		localStorage.setItem('firstshowing', JSON.stringify(firstshowing));
		localStorage.setItem('secondshowing', JSON.stringify(secondshowing));
		localStorage.setItem('thirdshowing', JSON.stringify(thirdshowing));
		localStorage.setItem('fourthshowing', JSON.stringify(fourthshowing));
		localStorage.setItem('userInformation', JSON.stringify(userinfo));
		localStorage.setItem('infoState', JSON.stringify(isValid));
		localStorage.setItem('usersDB', JSON.stringify(userInformation));
	}, [
		userinfo,
		isValid,
		firstshowing,
		secondshowing,
		thirdshowing,
		fourthshowing,
		userInformation,
	]);

	// show first page
	if (userinfo && firstshowing) {
		return (
			<div>
				<Navbar
					userinfo={userinfo}
					isValid={isValid}
					setisValid={setisValid}
					setUserInfo={setUserInfo}
				/>
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
					<div className='greetUser flex items-center gap-[16px] justify-start w-full border-b-2 pb-[20px] md:pt-[20px] '>
						<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
							<FaRegSmileBeam size={20} />
						</span>
						<div>
							<h3 className='text md:text-3xl text-xl font-bold'>
								Nice Meeting you, {userinfo.fname}
							</h3>
							<p className='md:text-xl text-md capitalize'>
								Let's get to know you more
							</p>
						</div>
					</div>
					{/* the main form */}

					<form
						action='/'
						className='flex w-full flex-wrap md:mt-[100px] mt-[32px] gap-10'
						onSubmit={(e) => e.preventDefault()}>
						{/* gender */}
						<select
							value={userInformation.gender}
							className=' formCss'
							name='gender'
							id='gender'
							onChange={(e) => {
								setuserInformation({
									...userInformation,
									gender: e.target.value,
								});
							}}>
							<option value='Select option'>Select Gender</option>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
							<option value='Others'>Others</option>
						</select>
						<input
							className='formCss'
							type='email'
							name='userEmail'
							placeholder='Enter Your Official Email'
							value={userInformation.email}
							onChange={(e) => {
								setuserInformation({
									...userInformation,
									email: e.target.value,
								});
								// console.log(userInformation.email);
							}}
						/>
						<select
							className=' formCss'
							name='EducationLevel'
							id='EducationLevel'
							value={userInformation.eduLevel}
							onChange={(e) => {
								setuserInformation({
									...userInformation,
									eduLevel: e.target.value,
								});
							}}>
							<option value='Select option'>Highest Education Level</option>
							<option value='SSCE'>SSCE</option>
							<option value='OND'>OND</option>
							<option value='HND'>HND</option>
							<option value='B.Sc'>B.Sc</option>
							<option value='M.Sc'>M.Sc</option>
							<option value='PhD'>PhD</option>
						</select>
						<div className='phoneNumb  formCss'>
							<select
								className='py-[10px] bg-[#6b6a8b] text-white rounded mr-2 text-center outline-none'
								name='country code'
								id='country'
								value={userInformation.countryCode}
								onChange={(e) => {
									setuserInformation({
										...userInformation,
										countryCode: e.target.value,
									});
								}}>
								<option value='+234'>+234</option>
								<option value='+1'>+1</option>
								<option value='+233'>+233</option>
								<option value='+236'>+236</option>
								<option value='+112'>+112</option>
								<option value='+321'>+321</option>
								<option value='+123'>+123</option>
							</select>
							{/* main num */}
							<input
								className='w-[70%] outline-none'
								type='number'
								value={
									userInformation.mobileNum !== undefined
										? userInformation.mobileNum.toString()
										: ''
								}
								name='phoneNum'
								id='phoneNum'
								placeholder={placeholder}
								onChange={(e) => {
									let stringInput = userInformation.mobileNum.toString();
									// console.log(stringInput)
									if (stringInput.length < 11) {
										setuserInformation({
											...userInformation,
											mobileNum: e.target.value,
										});
									} else {
										setuserInformation({
											...userInformation,
											mobileNum: '',
										});
										setplaceholder('11 characters Max');
									}
								}}
							/>
						</div>
						<input
							className=' p-[16px] border-2 border-dotted border-[var(--primary)]  md:w-[93.5%] w-full outline-[#6D69FA]'
							placeholder='Enter Your Home Address'
							type='text'
							value={userInformation.addr}
							onChange={(e) => {
								setuserInformation({
									...userInformation,
									addr: e.target.value,
								});
							}}
						/>
						<button
							className='bg-[var(--primary)] md:w-[30%] w-full py-[12px] rounded text-white mt-[16px] flex items-center justify-center gap-2'
							onClick={(e) => {
								e.preventDefault();
								setfirstshowing(!firstshowing); //set first to false
								setsecondshowing(!secondshowing); //set second to true
								setuserInformation({ ...userInformation, username: 'john' });
							}}>
							Proceed To Education
						</button>
					</form>
				</div>
			</div>
		);
		// End of First section

		// Start Second section
	} else if (userinfo && secondshowing) {
		return (
			<div>
				<Navbar
					userinfo={userinfo}
					isValid={isValid}
					setisValid={setisValid}
					setUserInfo={setUserInfo}
				/>
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
					<div className='greetUser flex items-center gap-[16px] justify-start w-full border-b-2 pb-[20px] md:pt-[20px] '>
						<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
							<FaRegSmileBeam size={20} />
						</span>
						<div>
							<h3 className='text md:text-3xl text-xl font-bold'>
								Information Stored, {userinfo.fname}
							</h3>
							<p className='md:text-xl text-md capitalize'>
								Let's talk about your secondary education now
							</p>
						</div>
					</div>
					{/* the main form */}

					<form
						action='/'
						className='flex w-full flex-wrap md:mt-[100px] mt-[32px] gap-10'
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<input
							className=' formCss'
							type='text'
							placeholder='Secondary School Name'
							// value={userInformation}
							onChange={() => ''}
						/>
						<input
							className=' formCss'
							type='text'
							name='CertificateHeld'
							placeholder='Certificate Held'
							value={userInformation.secondarySchool.CertificateHeld}
							onChange={(e) => {
								setuserInformation((prev: userDBType) => ({
									...prev,
									secondarySchool: {
										...prev.secondarySchool,
										CertificateHeld: e.target.value.toUpperCase(),
									},
								}));
								// console.log(userInformation.email);
							}}
						/>
						<select
							className=' formCss'
							name='startYear'
							id='startYear'>
							<option value='Select option'>Select Start Year </option>
							{years.map((year) => {
								return (
									<option
										key={year}
										value='Male'>
										{year}
									</option>
								);
							})}
						</select>
						<select
							className=' formCss'
							name='endYear'
							id='endYear'>
							<option value='Select option'>Select End Year </option>
							{years.map((year) => {
								return (
									<option
										key={year}
										value='Male'>
										{year}
									</option>
								);
							})}
						</select>
						<div className='btns flex items-center flex-wrap  md:flex-row flex-col-reverse w-full md:gap-2'>
							{/* end of inputs */}
							<button
								className='border-[var(--primary)] text-[var(--primary)] border-2  md:w-[20%] w-full py-[12px] rounded  mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									setsecondshowing(!secondshowing); //setting second to false
									setfirstshowing(!firstshowing); //setting first to true back
								}}>
								Go Back To General Info
							</button>
							<button
								className='bg-[var(--primary)] md:w-[20%] w-full py-[12px] rounded text-white mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									setsecondshowing(!secondshowing); //set second false
									setthirdshowing(!thirdshowing); //set third to true
								}}>
								Proceed To Higher Institution
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	} else if (userinfo && thirdshowing) {
		return (
			<div>
				<Navbar
					userinfo={userinfo}
					isValid={isValid}
					setisValid={setisValid}
					setUserInfo={setUserInfo}
				/>
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
					<div className='greetUser flex items-center gap-[16px] justify-start w-full border-b-2 pb-[20px] md:pt-[20px] '>
						<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
							<FaRegSmileBeam size={20} />
						</span>
						<div>
							<h3 className='text md:text-3xl text-xl font-bold'>
								Information Stored, {userinfo.fname}
							</h3>
							<p className='md:text-xl text-md capitalize'>
								Let's talk about your Higher education now
							</p>
						</div>
					</div>
					{/* the main form */}

					<form
						action='/'
						className='flex w-full flex-wrap md:mt-[100px] mt-[32px] gap-10'
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<input
							className=' formCss'
							type='text'
							placeholder='Higher Institution Name'
							// value={userInformation}
							onChange={() => ''}
						/>
						<input
							className=' formCss'
							type='text'
							placeholder='Certificate Held'
							// value={userInformation}
							onChange={() => ''}
						/>
						<select
							className=' formCss'
							name='startYear'
							id='startYear'>
							<option value='Select option'>Select Start Year </option>
							{years.map((year) => {
								return (
									<option
										key={year}
										value='Male'>
										{year}
									</option>
								);
							})}
						</select>
						<select
							className=' formCss'
							name='endYear'
							id='endYear'>
							<option value='Select option'>Select End Year </option>
							{years.map((year) => {
								return (
									<option
										key={year}
										value='Male'>
										{year}
									</option>
								);
							})}
						</select>
						<div className='btns flex items-center flex-wrap  md:flex-row flex-col-reverse w-full md:gap-2'>
							{/* end of inputs */}
							<button
								className='border-[var(--primary)] text-[var(--primary)] border-2  md:w-[20%] w-full py-[12px] rounded  mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									setthirdshowing(!thirdshowing); //set third to false
									setsecondshowing(!secondshowing); //set second to true
								}}>
								Go Back To Secondary School
							</button>
							<button
								className='bg-[var(--primary)] md:w-[20%] w-full py-[12px] rounded text-white mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									setthirdshowing(!thirdshowing); //set third to false
									setfourthshowing(!fourthshowing); //set fourth to true
								}}>
								Proceed To Experience
							</button>
						</div>
					</form>
				</div>
			</div>
		);
		// End of Higher Education

		// Start of Experience
	} else if (userinfo && fourthshowing) {
		return (
			<div className='pb-[40px]'>
				<Navbar
					userinfo={userinfo}
					isValid={isValid}
					setisValid={setisValid}
					setUserInfo={setUserInfo}
				/>
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
					<div className='greetUser flex items-center gap-[16px] justify-start w-full border-b-2 pb-[20px] md:pt-[20px] '>
						<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
							<FaRegSmileBeam size={20} />
						</span>
						<div>
							<h3 className='text md:text-3xl text-xl font-bold'>
								Information Stored, {userinfo.fname}
							</h3>
							<p className='md:text-xl text-md capitalize'>
								Let's talk about the great things you've done
							</p>
						</div>
					</div>
					{/* the main form */}

					<form
						action='/'
						className='flex w-full flex-wrap md:mt-[100px] mt-[32px] gap-10'
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<input
							className=' formCss'
							type='text'
							placeholder='Your Role'
							// value={userInformation}
							onChange={() => ''}
						/>
						<input
							className=' formCss'
							type='text'
							placeholder='Organization Name'
							// value={userInformation}
							onChange={() => ''}
						/>
						<select
							className=' formCss'
							name='startYear'
							id='startYear'>
							<option value='Select option'>Select Start Year </option>
							{years.map((year) => {
								return (
									<option
										key={year}
										value='Male'>
										{year}
									</option>
								);
							})}
						</select>
						<select
							className=' formCss'
							name='endYear'
							id='endYear'>
							<option value='Select option'>Select End Year </option>
							{years.map((year) => {
								return (
									<option
										key={year}
										value='Male'>
										{year}
									</option>
								);
							})}
						</select>
						<input
							className=' formCss'
							type='text'
							placeholder='Achievement - one bullet point (Optional)'
							// value={userInformation}
							onChange={() => ''}
						/>
						<div className='addMore flex items-center justify-start gap-4'>
							<span className='w-[50px] h-[50px] flex justify-center items-center border-2 bg-[#BBDAFF] rounded-full'>
								<CiCirclePlus size={30} />
							</span>
							<button className='text-[var(--primary)] font-medium'>
								Add More Achievement
							</button>
						</div>
						{/* end of inputs */}
						<div className='btns flex items-center flex-wrap  md:flex-row flex-col-reverse w-full md:gap-2'>
							<button
								className='border-[var(--primary)] text-[var(--primary)] border-2  md:w-[20%] w-full py-[12px] rounded  mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									setsecondshowing(!secondshowing); //set second to true
									setthirdshowing(!thirdshowing); //set third to false
								}}>
								Go Back To Higher Institution
							</button>
							<button className='bg-[var(--primary)] md:w-[20%] w-full py-[12px] rounded text-white mt-[16px] flex items-center justify-center gap-2'>
								Proceed To Experience
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	} else {
		console.log('hello');
	}
};

export default Home;
