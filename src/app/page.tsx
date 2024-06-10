'use client';
import React, { useEffect, useState } from 'react';
import { userDB, userDBType } from '../data/userDB';
import Login from '@/pages/Register';
import { UserInfo } from '../type/UserInfo';
const page = () => {
	// type SetUserInfoType = (userInfo: UserInfo) => void;

	const [userInformation, setuserInformation] = useState<userDBType>(userDB);
	const [userinfo, setuserinfo] = useState<UserInfo>({});
	useEffect(() => {
		const storedValue = localStorage.getItem('userInformation');
		if (storedValue) {
			setuserinfo(JSON.parse(storedValue));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('userInformation', JSON.stringify(userinfo));
	}, [userinfo]);
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
