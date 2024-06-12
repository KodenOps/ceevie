'use client';
import React, { useEffect, useState } from 'react';
import { UserInfo } from '../type/UserInfo';
import Navbar from '@/components/Navbar';
import { FaBook, FaRegSmileBeam, FaUserGraduate } from 'react-icons/fa';
import { secondarySchool, userDBType } from '@/data/userDB';
import { MdOutlineHdrPlus, MdPlusOne, MdWorkOutline } from 'react-icons/md';
import { CiCirclePlus } from 'react-icons/ci';
import { IoMdTrash } from 'react-icons/io';

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
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='gender'>Your Gender</label>
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
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='userEmail'>Your Official Email</label>
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
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='EducationLevel'>Highest Level Of Education</label>
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
								<option value='Select option'>Select an Option</option>
								<option value='SSCE'>SSCE</option>
								<option value='OND'>OND</option>
								<option value='HND'>HND</option>
								<option value='B.Sc'>B.Sc</option>
								<option value='M.Sc'>M.Sc</option>
								<option value='PhD'>PhD</option>
							</select>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='phoneNum'>Mobile Number</label>
							<div className='phoneNumb  formCss'>
								<select
									className='h-full bg-[#6b6a8b] text-white rounded mr-2 text-center outline-none'
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
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='phoneNum'>Your Home Address</label>
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
						</div>
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
							<FaBook size={20} />
						</span>
						<div>
							<h3 className='text md:text-3xl text-xl font-bold'>
								College/Secondary School
							</h3>
							<p className='md:text-xl text-md capitalize'>
								Tell me about your college education
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
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='SecSchoolName'>School Name</label>
							<input
								className=' formCss'
								name='SecSchoolName'
								type='text'
								placeholder='Secondary School Name'
								value={userInformation.secondarySchool.name}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										secondarySchool: {
											...prev.secondarySchool,
											name: e.target.value,
										},
									}));
								}}
							/>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='CertificateHeld'>Certification Name</label>
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
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='startYear'>Start Year</label>
							<select
								className=' formCss'
								name='startYear'
								id='startYear'
								value={userInformation.secondarySchool.sstartDate}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										secondarySchool: {
											...prev.secondarySchool,
											sstartDate: e.target.value,
										},
									}));
								}}>
								<option value='Select option'>Select Start Year </option>
								{years.map((year) => {
									return (
										<option
											key={year}
											value={year}>
											{year}
										</option>
									);
								})}
							</select>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='endYear'>End Year</label>
							<select
								className=' formCss'
								name='endYear'
								id='endYear'
								value={userInformation.secondarySchool.sendDate}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										secondarySchool: {
											...prev.secondarySchool,
											sendDate: e.target.value,
										},
									}));
								}}>
								<option value='Select one option'>Select End Year </option>
								{years.map((year) => {
									return (
										<option
											key={year}
											value={year}>
											{year}
										</option>
									);
								})}
							</select>
						</div>
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
							<FaUserGraduate size={20} />
						</span>
						<div>
							<h3 className='text md:text-3xl text-xl font-bold'>
								Higher Education
							</h3>
							<p className='md:text-xl text-md capitalize'>
								Tell me more about your education
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
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='phoneNum'>Institution Name</label>
							<input
								className=' formCss'
								type='text'
								name='higherEduName'
								placeholder='Higher Institution Name'
								value={userInformation.higherInstitution.name}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										higherInstitution: {
											...prev.higherInstitution,
											name: e.target.value,
										},
									}));
								}}
							/>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='phoneNum'>Degree Name</label>
							<input
								className=' formCss'
								type='text'
								placeholder='Certificate Held'
								name='higherCert'
								value={userInformation.higherInstitution.Certificate_Held}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										higherInstitution: {
											...prev.higherInstitution,
											Certificate_Held: e.target.value,
										},
									}));
								}}
							/>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='startYear'>Start Year</label>
							<select
								className=' formCss'
								name='startYear'
								id='startYear'
								value={userInformation.higherInstitution.hstartDate}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										higherInstitution: {
											...prev.higherInstitution,
											hstartDate: e.target.value,
										},
									}));
								}}>
								<option value='Select option'>Select Start Year </option>
								{years.map((year) => {
									return (
										<option
											key={year}
											value={year}>
											{year}
										</option>
									);
								})}
							</select>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='endYear'>End Year</label>
							<select
								className=' formCss'
								name='endYear'
								id='endYear'
								value={userInformation.higherInstitution.hendDate}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										higherInstitution: {
											...prev.higherInstitution,
											hendDate: e.target.value,
										},
									}));
								}}>
								<option value='Select option'>Select End Year </option>
								{years.map((year) => {
									return (
										<option
											key={year}
											value={year}>
											{year}
										</option>
									);
								})}
							</select>
						</div>
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
							<MdWorkOutline size={20} />
						</span>
						<div>
							<h3 className='text md:text-3xl text-xl font-bold'>
								Work Experience
							</h3>
							<p className='md:text-xl text-md capitalize'>
								Share the great things you've done
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
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='user Role'>Job Title</label>
							<input
								className=' formCss'
								name='user Role'
								type='text'
								value={userInformation.userRole[0].roles}
								placeholder='Job Title'
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										userRole: prev.userRole.map((role, index) =>
											index === 0 ? { ...role, roles: e.target.value } : role
										),
									}));
								}}
							/>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='Organization'>Organization Name</label>
							<input
								className=' formCss'
								type='text'
								name='Organization'
								placeholder='Organization Name'
								value={userInformation.userRole[0].organization}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										userRole: prev.userRole.map((role, index) =>
											index === 0
												? { ...role, organization: e.target.value }
												: role
										),
									}));
								}}
							/>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='startYear'>Start Year</label>
							<select
								className=' formCss'
								name='startYear'
								id='startYear'
								value={userInformation.userRole[0].rstartDate}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										userRole: prev.userRole.map((role, index) =>
											index === 0
												? { ...role, rstartDate: e.target.value }
												: role
										),
									}));
								}}>
								<option value='Select option'>Select Start Year </option>
								{years.map((year) => {
									return (
										<option
											key={year}
											value={year}>
											{year}
										</option>
									);
								})}
							</select>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='endYear'>End Year</label>
							<select
								className=' formCss'
								name='endYear'
								id='endYear'
								value={userInformation.userRole[0].rendDate}
								onChange={(e) => {
									setuserInformation((prev: userDBType) => ({
										...prev,
										userRole: prev.userRole.map((role, index) =>
											index === 0 ? { ...role, rendDate: e.target.value } : role
										),
									}));
								}}>
								<option value='Select option'>Select End Year </option>
								{years.map((year) => {
									return (
										<option
											key={year}
											value={year}>
											{year}
										</option>
									);
								})}
							</select>
						</div>

						{userInformation.userRole[0].achievementList.map(
							(e, achievementIndex) => {
								console.log(
									userInformation.userRole[0].achievementList.indexOf(e),
									e
								);
								return (
									<div
										className='md:w-[48%] w-full flex flex-col'
										key={achievementIndex}>
										<label htmlFor='achievement'>
											Achievement {achievementIndex + 1}
										</label>
										<input
											className=' formCss'
											name='achievement'
											type='text'
											placeholder='Achievement - one bullet point (Optional)'
											value={
												userInformation.userRole[0].achievementList[
													achievementIndex
												] || ''
											}
											onChange={(e) => {
												const newValue = e.target.value;
												setuserInformation((prev: userDBType) => ({
													...prev,
													userRole: prev.userRole.map((role, index) => ({
														...role,
														achievementList:
															index === 0
																? role.achievementList.map((item, j) =>
																		achievementIndex === j ? newValue : item
																  )
																: role.achievementList,
													})),
												}));
											}}
										/>
										<span
											className='text-red-400 flex items-center mt-2'
											onClick={() => {
												setuserInformation((prev: userDBType) => ({
													...prev,
													userRole: prev.userRole.map((role, index) => ({
														...role,
														achievementList:
															index === 0
																? role.achievementList.filter(
																		(item, j) => j !== achievementIndex
																  )
																: role.achievementList,
													})),
												}));
											}}>
											{' '}
											<IoMdTrash size={20} /> Remove
										</span>
									</div>
								);
							}
						)}

						<div
							className={`addMore flex items-center justify-start gap-4 ${
								userInformation.userRole[0].achievementList.slice(-1)[0] === ''
									? 'disabled'
									: ''
							}`}
							onClick={() => {
								const lastAchievement =
									userInformation.userRole[0].achievementList.slice(-1)[0];
								if (lastAchievement !== '') {
									setuserInformation((prev: userDBType) => ({
										...prev,
										userRole: prev.userRole.map((role) => ({
											...role,
											achievementList: [...role.achievementList, ''], // Add an empty string for a new achievement
										})),
									}));
								}
							}}>
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
								className=' text-[var(--primary)]   md:w-[20%] w-full py-[12px] rounded font-medium mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									setfourthshowing(!fourthshowing); //set fourth to true
									setthirdshowing(!thirdshowing); //set third to false
								}}>
								Go Back To Higher Institution
							</button>
							<button
								className='border-[var(--primary)] text-[var(--primary)] border-2  md:w-[20%] w-full py-[12px] rounded  mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									// setsecondshowing(!secondshowing); //set second to true
									// setthirdshowing(!thirdshowing); //set third to false
								}}>
								Add More Experience
							</button>
							<button
								className='bg-[var(--primary)] md:w-[20%] w-full py-[12px] rounded text-white mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									// setsecondshowing(!secondshowing); //set second to true
									// setthirdshowing(!thirdshowing); //set third to false
								}}>
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
