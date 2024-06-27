'use client';
import React, { useEffect, useState } from 'react';
import { UserInfo } from '../type/UserInfo';
import Navbar from '@/components/Navbar';
import { FaBook, FaLink, FaRegSmileBeam, FaUserGraduate } from 'react-icons/fa';
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
	fifthshowing: boolean;
	setfifthshowing: Function;
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
	fifthshowing,
	setfifthshowing,
}) => {
	const [placeholder, setplaceholder] = useState('Enter Mobile Number');
	useEffect(() => {
		localStorage.setItem('firstshowing', JSON.stringify(firstshowing));
		localStorage.setItem('secondshowing', JSON.stringify(secondshowing));
		localStorage.setItem('thirdshowing', JSON.stringify(thirdshowing));
		localStorage.setItem('fourthshowing', JSON.stringify(fourthshowing));
		localStorage.setItem('fifthshowing', JSON.stringify(fifthshowing));
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
		fifthshowing,
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
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-x-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
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
						className='flex w-full flex-wrap md:mt-[50px] mt-[32px] gap-10 '
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
							className='bg-[var(--primary)]  md:w-[45%] px-[16px] w-full py-[16px] rounded text-white md:mt-5 mt-[16px] flex items-center justify-center'
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
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-x-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
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
						className='flex w-full flex-wrap md:mt-[50px] mt-[32px] gap-10'
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
								className='border-[var(--primary)] text-[var(--primary)] border-2   md:w-auto px-[16px] w-full py-[12px] rounded  mt-[16px] flex items-center justify-center gap-2'
								onClick={(e) => {
									e.preventDefault();
									setsecondshowing(!secondshowing); //setting second to false
									setfirstshowing(!firstshowing); //setting first to true back
								}}>
								Go Back To General Info
							</button>
							<button
								className='bg-[var(--primary)]  md:w-auto px-[16px] w-full py-[12px] rounded text-white mt-[16px] flex items-center justify-center gap-2'
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
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-x-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
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
						className='flex w-full flex-wrap md:mt-[50px] mt-[32px] gap-10'
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
								className='border-[var(--primary)] text-[var(--primary)] border-2  md:w-auto px-[16px] w-full py-[12px] rounded  mt-[16px] flex items-center justify-center gap-2'
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
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-x-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
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
					{userInformation.userRole.map((role, roleIndex) => {
						return (
							<div
								key={roleIndex}
								className='border-b-2 border-red-300 pb-[32px] md:mb-[0px] mb-[16px] border-dotted w-full'>
								<h2 className='text-center w-full md:text-xl text-md font-semibold text-[var(--primary)] mt-4 flex items-center justify-between gap-2'>
									Experience {roleIndex + 1}{' '}
									<span
										className='flex items-center justify-start gap-2 text-red-400 cursor-pointer'
										onClick={() => {
											if (userInformation.userRole.length > 1) {
												setuserInformation((prev: userDBType) => ({
													...prev,
													userRole: prev.userRole.filter(
														(_, index) => index !== roleIndex
													),
												}));
											} else {
												alert('Cannot delete the only experience');
											}
										}}>
										<IoMdTrash size={20} /> Delete Experience
									</span>
								</h2>
								<form className='flex w-full flex-wrap md:mt-[50px] mt-[32px] gap-10'>
									<div className='md:w-[48%] w-full flex flex-col'>
										<label htmlFor={`userRole-${roleIndex}-jobTitle`}>
											Job Title
										</label>
										<input
											className='formCss'
											name={`userRole-${roleIndex}-jobTitle`}
											type='text'
											value={role.roles}
											placeholder='Job Title'
											onChange={(e) => {
												const newValue = e.target.value;
												setuserInformation((prev: userDBType) => ({
													...prev,
													userRole: prev.userRole.map((r, i) =>
														i === roleIndex ? { ...r, roles: newValue } : r
													),
												}));
											}}
										/>
									</div>
									<div className='md:w-[48%] w-full flex flex-col'>
										<label htmlFor={`userRole-${roleIndex}-organization`}>
											Organization Name
										</label>
										<input
											className='formCss'
											type='text'
											name={`userRole-${roleIndex}-organization`}
											placeholder='Organization Name'
											value={role.organization}
											onChange={(e) => {
												const newValue = e.target.value;
												setuserInformation((prev: userDBType) => ({
													...prev,
													userRole: prev.userRole.map((r, i) =>
														i === roleIndex
															? { ...r, organization: newValue }
															: r
													),
												}));
											}}
										/>
									</div>
									<div className='md:w-[48%] w-full flex flex-col'>
										<label htmlFor={`userRole-${roleIndex}-startYear`}>
											Start Year
										</label>
										<select
											className='formCss'
											name={`userRole-${roleIndex}-startYear`}
											id={`userRole-${roleIndex}-startYear`}
											value={role.rstartDate}
											onChange={(e) => {
												const newValue = e.target.value;
												setuserInformation((prev: userDBType) => ({
													...prev,
													userRole: prev.userRole.map((r, i) =>
														i === roleIndex ? { ...r, rstartDate: newValue } : r
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
										<label htmlFor={`userRole-${roleIndex}-endYear`}>
											End Year
										</label>
										<select
											className='formCss'
											name={`userRole-${roleIndex}-endYear`}
											id={`userRole-${roleIndex}-endYear`}
											value={role.rendDate}
											onChange={(e) => {
												const newValue = e.target.value;
												setuserInformation((prev: userDBType) => ({
													...prev,
													userRole: prev.userRole.map((r, i) =>
														i === roleIndex ? { ...r, rendDate: newValue } : r
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

									{role.achievementList.map((achievement, achievementIndex) => {
										return (
											<div
												className='md:w-[48%] w-full flex flex-col'
												key={achievementIndex}>
												<label
													htmlFor={`achievement-${roleIndex}-${achievementIndex}`}>
													Achievement {achievementIndex + 1}
												</label>
												<input
													className='formCss'
													name={`achievement-${roleIndex}-${achievementIndex}`}
													type='text'
													placeholder='Achievement - one bullet point (Optional)'
													value={achievement}
													onChange={(e) => {
														const newValue = e.target.value;
														setuserInformation((prev: userDBType) => ({
															...prev,
															userRole: prev.userRole.map((r, i) =>
																i === roleIndex
																	? {
																			...r,
																			achievementList: r.achievementList.map(
																				(item, j) =>
																					j === achievementIndex
																						? newValue
																						: item
																			),
																	  }
																	: r
															),
														}));
													}}
												/>
												<span
													className={`text-red-400 flex items-center mt-2 cursor-pointer ${
														role.achievementList.length === 1 ? 'disabled' : ''
													}`}
													onClick={() => {
														if (role.achievementList.length > 1) {
															setuserInformation((prev: userDBType) => ({
																...prev,
																userRole: prev.userRole.map((r, i) =>
																	i === roleIndex
																		? {
																				...r,
																				achievementList:
																					r.achievementList.filter(
																						(item, j) => j !== achievementIndex
																					),
																		  }
																		: r
																),
															}));
														}
													}}>
													<IoMdTrash size={20} /> Remove
												</span>
											</div>
										);
									})}

									<div
										className={`addMore flex items-center justify-start gap-4 ${
											role.achievementList.slice(-1)[0] === '' ? 'disabled' : ''
										}`}
										onClick={(e) => {
											e.preventDefault();
											const lastAchievement = role.achievementList.slice(-1)[0];
											if (lastAchievement !== '') {
												setuserInformation((prev: userDBType) => ({
													...prev,
													userRole: prev.userRole.map((r, i) =>
														i === roleIndex
															? {
																	...r,
																	achievementList: [...r.achievementList, ''],
															  }
															: r
													),
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
								</form>
							</div>
						);
					})}

					{/* end of inputs */}
					<div className='btns flex items-center flex-wrap  md:flex-row flex-col-reverse w-full md:gap-2'>
						<button
							className='border-[var(--primary)] text-[var(--primary)] border-2  md:w-[20%] w-full py-[12px] rounded  mt-[16px] flex items-center justify-center gap-2'
							onClick={(e) => {
								e.preventDefault();
								setuserInformation((prev: userDBType) => {
									const lastRole = prev.userRole[prev.userRole.length - 1];
									const allFieldsFilled =
										lastRole.organization !== '' &&
										lastRole.roles !== '' &&
										lastRole.rstartDate !== '' &&
										lastRole.rendDate !== '' &&
										lastRole.achievementList.every(
											(achievement) => achievement !== ''
										);

									if (!allFieldsFilled) {
										// If not all fields are filled, return the previous state without adding a new role
										return prev;
									}

									// If all fields are filled, add the new role
									return {
										...prev,
										userRole: [
											...prev.userRole,
											{
												organization: '',
												roles: '',
												rstartDate: '',
												rendDate: '',
												achievementList: [''],
											},
										],
									};
								});
							}}>
							Add More Experience
						</button>
						<button
							className='bg-[var(--primary)] md:w-[20%] w-full py-[12px] rounded text-white mt-[16px] flex items-center justify-center gap-2'
							onClick={(e) => {
								e.preventDefault();
								setfourthshowing(!fourthshowing); //set fourth to false
								setfifthshowing(!fifthshowing); //set fifth to true
							}}>
							Next
						</button>
					</div>
					<button
						className=' text-[var(--primary)]   md:w-auto w-full py-[12px] rounded font-medium  flex items-center justify-center gap-2'
						onClick={(e) => {
							e.preventDefault();
							setfourthshowing(!fourthshowing); //set fourth to true
							setthirdshowing(!thirdshowing); //set third to false
						}}>
						Go Back To Higher Institution
					</button>
				</div>
			</div>
		);
	}
	// end of Fourth Section --- Experience section
	else if (userinfo && fifthshowing) {
		return (
			<div>
				<Navbar
					userinfo={userinfo}
					isValid={isValid}
					setisValid={setisValid}
					setUserInfo={setUserInfo}
				/>
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-x-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
					<div className='greetUser flex items-center gap-[16px] justify-start w-full border-b-2 pb-[20px] md:pt-[20px] '>
						<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
							<FaLink size={20} />
						</span>
						<div>
							<h3 className='text md:text-3xl text-xl font-bold'>
								Other Information
							</h3>
							<p className='md:text-xl text-md capitalize'>
								Other things you want to tell
							</p>
						</div>
					</div>
					{/* the main form */}

					<form
						action='/'
						className='flex w-full flex-wrap md:mt-[50px] mt-[32px] gap-10'
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='LinkedInURL'>LinkedIn URL</label>
							<input
								className='formCss'
								type='url'
								name='LinkedInURL'
								value={userInformation.linkedIn}
								placeholder='Your LinkedIn URL'
								onChange={(e) => {
									setuserInformation({
										...userInformation,
										linkedIn: e.target.value,
									});
								}}
							/>
						</div>
						<div className='md:w-[48%] w-full flex flex-col'>
							<label htmlFor='portfolioURL'>Portfolio URL</label>
							<input
								className='formCss'
								type='url'
								name='portfolioURL'
								value={userInformation.portfolio}
								placeholder='Your Portfolio URL'
								onChange={(e) => {
									setuserInformation({
										...userInformation,
										portfolio: e.target.value,
									});
								}}
							/>
						</div>
						<div className='md:w-[48%] w-full flex flex-col  border-b-2  border-red-400 border-dotted pb-[32px]'>
							<label htmlFor='certStatus'>
								Any Certification(s)?
								<span className='text-red-500'>*</span>
							</label>
							<select
								className=' formCss '
								name='certStatus'
								id='startYear'
								value={userInformation.certAvailable}
								onChange={(e) => {
									setuserInformation({
										...userInformation,
										certAvailable: e.target.value,
									});
								}}>
								<option value='Select option'>Select option </option>
								<option value='Yes'>Yes </option>
								<option value='No'>No </option>
							</select>
						</div>
						{userInformation.certAvailable === 'Yes' ? (
							<div className='w-full '>
								{userInformation.Certification.map((cert, Certindex) => {
									let CertTitle = 'Certification' + Certindex;
									return (
										<div className='flex w-full flex-wrap md:mt-[20px] mt-[0px] gap-10 border-b-2 pb-[32px] border-red-400 border-dotted mb-[16px]'>
											<p className='md:text-xl text-sm text-center w-full text-[var(--primary)]'>
												----------- Certificate {Certindex + 1} -----------
											</p>
											<div className='md:w-[48%] w-full flex flex-col'>
												<label htmlFor='phoneNum'> Certification Name</label>
												<input
													className=' formCss'
													type='text'
													name={CertTitle + ' ' + ' ' + Certindex}
													placeholder='Higher Institution Name'
													value={cert.name}
													onChange={(e) => {
														setuserInformation((prev: userDBType) => ({
															...prev,
															// Certification:[...cert, ]
															Certification: prev.Certification.map((r, i) =>
																i === Certindex
																	? { ...r, name: e.target.value }
																	: r
															),
														}));
													}}
												/>
											</div>
											<div className='md:w-[48%] w-full flex flex-col'>
												<label htmlFor='endYear'>End Year</label>
												<select
													className=' formCss'
													name='endYear'
													id='endYear'
													value={cert.year}
													onChange={(e) => {
														setuserInformation((prev: userDBType) => ({
															...prev,
															// Certification:[...cert, ]
															Certification: prev.Certification.map((r, i) =>
																i === Certindex
																	? { ...r, year: e.target.value }
																	: r
															),
														}));
													}}>
													<option value='Select option'>
														Select End Year{' '}
													</option>
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
												<span
													className={`text-red-400 flex items-center mt-2 cursor-pointer ${1}`}
													onClick={() => {
														if (userInformation.Certification.length > 1) {
															setuserInformation((prev: userDBType) => ({
																...prev,
																Certification: prev.Certification.filter(
																	(_, index) => index !== Certindex
																),
															}));
														}
													}}>
													<IoMdTrash size={20} /> Remove
												</span>
											</div>
											<div className='btns flex items-center flex-wrap  md:flex-row flex-col w-full md:gap-2'>
												{/* add more certificate */}
												<div
													className={`addMore flex items-center justify-center gap-4 mb-[16px] ${1}`}>
													<span className='w-[35px] h-[35px] flex justify-center items-center border-2 bg-[#BBDAFF] rounded-full '>
														<CiCirclePlus size={25} />
													</span>
													<button
														className={`text-[var(--primary)] font-medium 	${
															userInformation.Certification.slice(-1)[0]
																.name === ''
																? 'disabled'
																: ''
														}`}
														onClick={(e) => {
															e.preventDefault();
															let newuser = {
																name: '',
																year: '',
															};

															const lastCert =
																userInformation.Certification.slice(-1)[0];
															if (lastCert && lastCert.name !== '') {
																setuserInformation((prev: userDBType) => ({
																	...prev,
																	Certification: [
																		...prev.Certification,
																		newuser,
																	],
																}));
															}
														}}>
														Add More Certificates
													</button>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						) : (
							''
						)}
						<div className='w-full flex items-center justify-start gap-4'>
							<button
								className='border-[var(--primary)] text-[var(--primary)] border-2  md:w-auto px-[16px] w-full py-[12px] rounded  mt-[16px] flex items-center justify-center gap-2'
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
	} else {
		console.log('hello');
	}
};

export default Home;
