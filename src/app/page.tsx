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
	const [firstshowing, setfirstshowing] = useState(true);
	const [secondshowing, setsecondshowing] = useState(false);
	const [thirdshowing, setthirdshowing] = useState(false);
	const [fourthshowing, setfourthshowing] = useState(false);
	useEffect(() => {
		const storedValue = localStorage.getItem('userInformation');
		const state = localStorage.getItem('infoState');
		if (storedValue && state) {
			setuserinfo(JSON.parse(storedValue));
			setisValid(JSON.parse(state));
		}
	}, []);

	return (
		<div className=''>
			<Login
				isvalid={isValid}
				setisvalid={setisValid}
				userinfo={userinfo}
				setUserInfo={setuserinfo}
				userinformation={userInformation}
				setuserInformation={setuserInformation}
				firstshowing={firstshowing}
				secondshowing={secondshowing}
				thirdshowing={thirdshowing}
				fourthshowing={fourthshowing}
				setfirstshowing={setfirstshowing}
				setsecondshowing={setsecondshowing}
				setthirdshowing={setthirdshowing}
				setfourthshowing={setfourthshowing}
			/>
		</div>
	);
};

export default page;
