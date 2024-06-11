'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { userDB, userDBType } from '../data/userDB';
import Login from '@/pages/Register';
import { UserInfo } from '../type/UserInfo';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
		const userInfoDB = localStorage.getItem('usersDB');
		// console.log(typeof userInfoDB);

		if (storedValue && state && userInfoDB) {
			setuserinfo(JSON.parse(storedValue));
			setisValid(JSON.parse(state));
			setuserInformation(JSON.parse(userInfoDB));
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
