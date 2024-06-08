'use client';
import React, { useState } from 'react';
import { userDB } from '../data/userDB';
import Login from '@/pages/Login';
const page = () => {
	const [userInformation, setuserInformation] = useState(userDB);

	return (
		<div className=''>
			<Login />
		
		</div>
	);
};

export default page;
