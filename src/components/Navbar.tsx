'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/asset/logo.png';
import { UserInfo } from '../type/UserInfo';
import {
	MdArrowRight,
	MdCall,
	MdClose,
	MdHome,
	MdInfo,
	MdMenu,
} from 'react-icons/md';
import { PiUserCircleLight } from 'react-icons/pi';

interface Props {
	userinfo: UserInfo;
	isValid?: boolean;
	setisValid: Function;
	setUserInfo: Function;
}

const Navbar: React.FC<Props> = ({
	userinfo,
	isValid,
	setisValid,
	setUserInfo,
}) => {
	const [navOpen, setnavOpen] = useState(true);
	let navName = '';
	let navText = '';

	if (userinfo && Object.keys(userinfo).length === 0) {
		navName = 'No User Logged in Yet';
		navText = 'Your info will appear here';
	} else if (userinfo) {
		navName = `${userinfo.fname}, ${userinfo.lname}`;
		navText = `${userinfo.mail}`;
	} else {
		navName = 'No User Logged in Yet';
		navText = 'Your info will appear here';
	}

	return (
		<nav className='flex items-center justify-between md:px-[40px] px-[16px] py-[24px]'>
			<div className='logo'>
				<Image
					className='md:w-[15%] w-[20%]'
					src={Logo}
					alt=''
				/>
			</div>
			<div className='navLinks'>
				<ul className='md:flex gap-8 justify-center items-center hidden text-lg'>
					<li className='navLinks hover:font-medium'>Home</li>
					<li className='navLinks hover:font-medium'>About</li>
					<li className='navLinks hover:font-medium'>Supports</li>
					{!isValid ? (
						<li className='navLinks w-[150px] border-2 border-solid border-[var(--primary)] text-[var(--primary)] rounded'>
							Login
						</li>
					) : (
						// the logout btn on web
						<li
							className='navLinks w-[150px] border-2 border-solid border-red-400 text-red-400 rounded'
							onClick={() => {
								setisValid(!isValid);
								setUserInfo({});
								localStorage.clear();
							}}>
							Logout
						</li>
					)}
				</ul>
				<div
					className='burgerIcon md:hidden block'
					onClick={() => setnavOpen(!navOpen)}>
					<MdMenu
						size={40}
						color='#066e9a'
					/>
				</div>
			</div>
			{navOpen ? null : (
				<div className=' h-[100vh] w-[100vw] bg-[white] top-0 left-0 fixed'>
					<div className='logo w-full flex justify-between items-center py-[24px] border-b-2 px-[16px]'>
						<Image
							className='w-[10%]'
							src={Logo}
							alt=''
						/>
						<div onClick={() => setnavOpen(!navOpen)}>
							<MdClose
								size={30}
								color='red'
							/>
						</div>
					</div>
					<ul className='mobileUl'>
						<li className=''>
							<div className='content flex justify-start items-center gap-[24px]'>
								<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
									<MdHome size={20} />
								</span>
								<p>Home</p>
							</div>
							<MdArrowRight size={20} />
						</li>
						<li className=''>
							<div className='content flex justify-start items-center gap-[24px]'>
								<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
									<MdInfo size={20} />
								</span>
								<p>About</p>
							</div>
							<MdArrowRight size={20} />
						</li>
						<li className=''>
							<div className='content flex justify-start items-center gap-[24px]'>
								<span className='w-[35px] h-[35px] bg-[#6D69FA] rounded flex justify-center items-center text-white'>
									<MdCall size={20} />
								</span>
								<p>Support</p>
							</div>
							<MdArrowRight size={20} />
						</li>
					</ul>
					<div className='absolute bottom-0 pb-[50px] bg-[#f3f3f3] w-[96%] mx-[2%] rounded mb-1 px-[16px] py-[16px]'>
						<div className='user text-slate-600 flex justify-start items-center gap-[16px] border-b-[2px] pb-[24px] border-slate-400'>
							<PiUserCircleLight size={50} />
							<div className='userInfo'>
								<h4 className='text-lg font-medium'>{navName}</h4>
								<p className='text-sm'>{navText}</p>
							</div>
						</div>
						<div className='btns mt-[24px] w-full'>
							{Object.keys(userinfo).length !== 0 ? (
								<button
									className='w-full py-[12px] bg-[var(--primary)] text-white bg-red-400 mb-[10px] outline-none border-none rounded'
									onClick={() => {
										setisValid(!isValid);
										setUserInfo({});
										localStorage.clear();
									}}>
									Logout
								</button>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
