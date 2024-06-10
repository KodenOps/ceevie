'use client';
import Navbar from '@/components/Navbar';
import { userDBType } from '@/data/userDB';
import { UserInfo } from '@/type/UserInfo';
import React from 'react';

interface Props {
	userinfo: UserInfo;
	isValid: boolean;
	setisValid: Function;
	setUserInfo: Function;
	userInformation: userDBType;
	setuserInformation: Function;
}
const Education: React.FC<Props> = ({
	userinfo,
	isValid,
	setisValid,
	setUserInfo,
	userInformation,
}) => {
	return (
		<div>
			<Navbar
				userinfo={userinfo}
				isValid={isValid}
				setisValid={setisValid}
				setUserInfo={setUserInfo}
			/>
			<div className='loginWrapper md:w-[70vw] w-full lg:h-[80vh] md:h-[75vh] md:border-[2px] border-[#e8e8e8] md:mx-[15%]   rounded-lg flex flex-col items-start overflow-hidden z-50 md:bg-white px-[24px] pt-[4px] pb-[24px]'>
				{' '}
				Education
			</div>
		</div>
	);
};

export default Education;
