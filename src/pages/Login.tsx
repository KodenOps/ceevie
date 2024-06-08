import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';
import loginImg from '../../public/asset/login_img.jpg';
import Pattern from '../../public/asset/pattern.png';
const Login = () => {
	return (
		<div className='relative'>
			<Image
				src={Pattern}
				alt='pattern'
				className='absolute top-0 left-0 w-[100%] -z-10 h-[100vh]'
			/>
			<Navbar />
			<div className='loginWrapper md:w-[60vw] w-full h-[70vh] md:border-[1px] border-[#e8e8e8] md:mx-[20%]   rounded-lg flex items-start overflow-hidden z-50 md:bg-white'>
				{/* the left side of login */}
				<div className='img w-[40%]  h-full md:block hidden'>
					<Image
						src={loginImg}
						alt='login Image'
						className='w-full object-cover h-full'
					/>
				</div>
				{/* the form side */}
				<div className='form px-[16px] md:py-[40px] md:w-[60%] w-full '>
					<h2 className='text-2xl font-semibold text-center md:mb-[16px] mb-[8px] '>
						Register
					</h2>
					<p className=' text-center font-medium'>
						Transform Your Career with Our AI-Powered CV Builder! Sign Up Now to
						Effortlessly Create a Standout CV in Minutes. Let AI Help You Land
						Your Dream Job and Shine in the Job Market!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
