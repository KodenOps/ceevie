'use client';
import React from 'react';
import { UserInfo } from '../type/UserInfo';
import Navbar from '@/components/Navbar';
import { FaRegSmileBeam } from 'react-icons/fa';
import { userDB } from '@/data/userDB';
import { MdArrowRight, MdArrowRightAlt } from 'react-icons/md';
interface Props {
	userinfo: UserInfo;
	isValid: boolean;
	setisValid: Function;
	userDB: Object;
	setUserInfo: Function;
}
const Home: React.FC<Props> = ({
	userinfo,
	isValid,
	setisValid,
	setUserInfo,
	userDB,
}) => {
	if (userinfo) {
		return (
			<div>
				<Navbar
					userinfo={userinfo}
					isValid={isValid}
					setisValid={setisValid}
					// UserInfo={UserInfo}
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
							<p className='md:text-xl text-md'>Let's get to know you more</p>
						</div>
					</div>
					{/* the main form */}
					<form
						action='/'
						className='flex w-full flex-wrap md:mt-[100px] mt-[32px] gap-5'>
						{/* gender */}
						<select
							className=' formCss'
							name='gender'
							id='gender'>
							<option value='Select option'>Select Gender</option>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
							<option value='Others'>Others</option>
						</select>
						<input
							className=' formCss'
							type='email'
							placeholder='Enter Your Official Email'
						/>
						<select
							className=' formCss'
							name='EducationLevel'
							id='EducationLevel'>
							<option value='Select option'>Highest Education Level</option>
							<option value='Select option'>SSCE</option>
							<option value='Select option'>OND</option>
							<option value='Select option'>HND</option>
							<option value='Select option'>B.Sc</option>
							<option value='Select option'>M.Sc</option>
							<option value='Select option'>PhD</option>
						</select>
						<div className='phoneNumb  formCss'>
							<select
								className='py-[10px] bg-[#6b6a8b] text-white rounded mr-2 text-center outline-none'
								name='country code'
								id='country'>
								<option value='Select option'>+234</option>
								<option value='Select option'>+1</option>
								<option value='Select option'>+233</option>
								<option value='Select option'>+236</option>
								<option value='Select option'>+112</option>
								<option value='Select option'>+321</option>
								<option value='Select option'>+123</option>
							</select>
							{/* main num */}
							<input
								className='w-[70%] outline-none'
								type='tel'
								maxLength={11}
								name='phoneNum'
								id='phoneNum'
								placeholder='Enter Phone Number'
							/>
						</div>
						<input
							className=' p-[16px] border-2 border-dotted border-[var(--primary)]  md:w-[92%] w-full outline-[#6D69FA]'
							type='textarea'
							placeholder='Enter Your Home Address'
						/>
						<button
							type='submit'
							className='bg-[var(--primary)] md:w-[30%] w-full py-[12px] rounded text-white mt-[16px] flex items-center justify-center gap-2'>
							Next
						</button>
					</form>
				</div>
			</div>
		);
	} else {
		('');
	}
};

export default Home;
