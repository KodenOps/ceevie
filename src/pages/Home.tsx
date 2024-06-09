'use client';
import React from 'react';
import { UserInfo } from '../type/UserInfo';
import Navbar from '@/components/Navbar';
import { FaRegSmileBeam } from 'react-icons/fa';

interface Props {
	userinfo: UserInfo;
	isValid: boolean;
	setisValid: Function;
	// UserInfo: Object;
	setUserInfo: Function;
}
const Home: React.FC<Props> = ({ userinfo, isValid, setisValid }) => {
	if (userinfo) {
		return (
			<div>
				<Navbar
					userinfo={userinfo}
					isValid={isValid}
					setisValid={setisValid}
					// UserInfo={UserInfo}
					// setUserInfo={setUserInfo}
				/>
				<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex items-start overflow-hidden z-50 md:bg-white px-[24px] py-[24px]'>
					<div className='greetUser flex items-center gap-[16px] md:justify-start justify-center w-full'>
						<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
							<FaRegSmileBeam size={20} />
						</span>
						<div className='text md:text-3xl text-xl font-bold'>
							Nice Meeting you, {userinfo.fname}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		('');
	}
};

export default Home;
