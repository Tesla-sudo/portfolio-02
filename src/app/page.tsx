'use client';
import { FaReddit, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
   <motion.div
   className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-12 bg-gray-900 text-white mb-0"
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity:1, y:0 }}
   transition={{ duration: 0.8 }}
   >
{/*Left Section: Text and social icons*/}
<div className='md:w-1/2 space-y-6'>
<h1 className='text-4xl text-blue-900 font-bold'>
Hi, I'm Fred
</h1>
<p className='text-lg'>I am a Frontend Developer, Content Writer and Reddit Reviewer. I am passionate
  about technology and am always looking for new ways to improve my skills and knowledge. My focus
  is on creating scalable and efficient web and mobile applications to improve the user experience.
</p>
<div className='flex space-x-4 mt-4'>
<a href="https://linkedin.com/in/fredrick-okwomboli-b8507a366?utm_source=share&utm_campaign=share&utm_content=profile&utm_medium=android_app" target='_blank' rel='noopener noreferrer'>
<FaLinkedin className='text-2xl text-blue-700 transition'/>
</a>
<a href="https://facebook.com/fredrick.okwomboli" target='_blank' rel='noopener noreferrer'>
<FaFacebook className='text-2xl text-blue-800 transition'/>
</a>
<a href="https://reddit.com" target='_blank' rel='noopener noreferrer'>
<FaReddit className='text-2xl text-red-700 transition'/>
</a>
</div>
</div>
{/*Right Section: Profile Image with Animated Border*/}
<div className='relative mt-10 md:mt-0 md:w-1/2 flex justify-center'>
<div className='relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500'>
<img src="/fred2.jpg" alt="Fred's Profile"/>
{/*Animated border*/}
<div className='absolute inset-0 rounded-full border-4 border-dotted border-blue-400 animated-spin-slow'>

</div>
</div>
</div>
   </motion.div>
  );
}
