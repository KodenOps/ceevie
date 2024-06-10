'use client';
import React, { useState } from 'react';
import { userDB, userDBType } from '../data/userDB';
import Login from '@/pages/Register';
import { UserInfo } from '../type/UserInfo';
const page = () => {
	// type SetUserInfoType = (userInfo: UserInfo) => void;

	const [userInformation, setuserInformation] = useState<userDBType>(userDB);
	const [userinfo, setuserinfo] = useState<UserInfo>({});
	return (
		<div className=''>
			<Login
				userinfo={userinfo}
				setUserInfo={setuserinfo}
				userinformation={userInformation}
				setuserInformation={setuserInformation}
			/>
		</div>
	);
};

export default page;
