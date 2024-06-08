'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/asset/logo.png';
import {
	MdArrowRight,
	MdCall,
	MdClose,
	MdHome,
	MdInfo,
	MdMenu,
} from 'react-icons/md';
import { PiUserCircleCheckThin, PiUserCircleLight } from 'react-icons/pi';
const Navbar = () => {
	const [navOpen, setnavOpen] = useState(true);
	return (
		<nav className='flex items-center justify-between md:px-[40px] px-[16px] py-[24px]'>
			<div className='logo'>
				<Image
					className='md:w-[25%] w-[20%]'
					src={Logo}
					// width={50}
					alt=''
				/>
			</div>
			{/* nav links for web */}
			<div className='navLinks'>
				<ul className='md:flex gap-8 justify-center items-center hidden text-lg'>
					<li className='navLinks hover:font-medium'>Home</li>
					<li className='navLinks hover:font-medium'>About</li>
					<li className='navLinks hover:font-medium'>Supports</li>
					<li className='navLinks w-[150px] border-2 border-solid border-[var(--primary)] text-[var(--primary)]  rounded  '>
						Login
					</li>
				</ul>
				{/* Nav Links for Mobile */}
				<div
					className='burgerIcon md:hidden block'
					onClick={() => setnavOpen(!navOpen)}>
					<MdMenu
						size={40}
						color='#066e9a'
					/>
				</div>
			</div>
			{/* side nav for mobile */}
			{navOpen ? (
				''
			) : (
				<div className='absolute h-[100vh] w-[100vw] bg-[white] top-0 left-0'>
					<div className='logo w-full flex justify-between items-center py-[24px] border-b-2 px-[16px]'>
						<Image
							className='w-[10%]'
							src={Logo}
							// width={50}
							alt=''
						/>
						<div onClick={() => setnavOpen(!navOpen)}>
							<MdClose
								size={30}
								color='red'
							/>
						</div>
					</div>
					{/* the mobile Links */}
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
					{/* end of top links */}
					<div className='absolute bottom-0  pb-[50px] bg-[#f3f3f3] w-[96%] mx-[2%] rounded mb-1 px-[16px] py-[16px]'>
						<div className='user text-slate-600 flex justify-start items-center gap-[16px] border-b-[2px] pb-[24px] border-slate-400'>
							<PiUserCircleLight size={50} />
							<div className='userInfo'>
								<h4 className='text-lg font-medium'>No User Logged in Yet</h4>
								<p className='text-sm '>Your info will apear here</p>
							</div>
						</div>
						<div className='btns mt-[24px]'>
							<button className='w-full py-[12px] bg-[var(--primary)] text-white mb-[10px] outline-none border-none rounded'>
								Login
							</button>
							<button className='w-full py-[12px] border-[var(--primary)] mb-[10px] outline-none border-2 rounded text-[var(--primary)]'>
								Register
							</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
