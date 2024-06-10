'use client';
import React, { useEffect, useState } from 'react';
import { userDB, userDBType } from '../data/userDB';
import Login from '@/pages/Register';
import { UserInfo } from '../type/UserInfo';
const page = () => {
	// type SetUserInfoType = (userInfo: UserInfo) => void;

	const [userInformation, setuserInformation] = useState<userDBType>(userDB);
	const [userinfo, setuserinfo] = useState<UserInfo>({});
	const [isValid, setisValid] = useState(false); // State variable to track form validity
	useEffect(() => {
		const storedValue = localStorage.getItem('userInformation');
		const state = localStorage.getItem('infoState');
		if (storedValue && state) {
			setuserinfo(JSON.parse(storedValue));
			setisValid(JSON.parse(state));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('userInformation', JSON.stringify(userinfo));
		localStorage.setItem('infoState', JSON.stringify(isValid));
	}, [userinfo, isValid]);
	return (
		<div className=''>
			<Login
				isvalid={isValid}
				setisvalid={setisValid}
				userinfo={userinfo}
				setUserInfo={setuserinfo}
				userinformation={userInformation}
				setuserInformation={setuserInformation}
			/>
		</div>
	);
};

export default page;
