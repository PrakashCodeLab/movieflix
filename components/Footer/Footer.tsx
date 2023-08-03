import Link from 'next/link';
import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin ,AiOutlineTwitter} from "react-icons/ai";
const Footer = () => {
    const year = new Date();
    const currentYear = year.getFullYear();

  return (
    <footer className='bg-gray-900  grid place-items-center '>
      <section className='w-full max-w-[1250px] flex justify-around items-center py-8 max-md:flex-col max-md:gap-5'>
        <div>
        <p className='capitalize text-[1em] text-green-50 '> <span>movieflix@<span>{currentYear}</span> </span>all rights reserved </p>
        </div>
        
        <div className='flex gap-5 text-[1.5rem]'>
        <Link href={'https://github.com/PrakashCodeLab/movieflix.git'} target="_blank"> <AiOutlineGithub className={`cursor-pointer text-gray-200 text-[1.5rem]`} /></Link>
         
         
         <Link href={'https://www.linkedin.com/in/prakash-tech-20977826a/'} target="_blank">
            <AiOutlineLinkedin className={` text-blue-200 cursor-pointer text-[1.5rem]`} />
         </Link>
         <Link href={'https://www.linkedin.com/in/prakash-tech-20977826a/'} target="_blank">
              <AiOutlineTwitter className={`text-green-100 cursor-pointer`}/> 
         </Link>
            
            
        </div>
      </section>
    </footer>
  );
}

export default Footer;
