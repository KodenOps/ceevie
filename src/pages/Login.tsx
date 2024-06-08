import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';
import loginImg from '../../public/asset/login_img.jpg';
const Login = () => {
	return (
		<div>
			<Navbar />
			<div className='loginWrapper md:w-[60vw] w-full h-[70vh] md:border-[1px] border-[#e8e8e8] md:mx-[20%]   rounded-lg flex items-start overflow-hidden'>
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
