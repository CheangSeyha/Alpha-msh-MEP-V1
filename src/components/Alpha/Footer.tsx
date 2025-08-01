import React from 'react'
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

 

function Footer() {
  return (
    <div className='fixed bottom-0 w-full'>
      <img src="worldMap.jpg" alt="Background" className='w-full h-[550px] max-[530px]:hidden object-cover blur-sm'/>
      <div className='absolute top-0 w-full footer-content bg-red-500 flex items-center justify-between px-8 max-[530px]:hidden'>
        <div className='flex max-[1115px]:flex-col max-[1115px]:space-y-2 justify-evenly items-center w-full py-10'>
          <p className='text-gray-600 text-4xl max-[700px]:text-xl font-extrabold font-poppins'>Get in touch with one of our MEP engineers</p>
          <InteractiveHoverButton>Let's Chat</InteractiveHoverButton>
        </div>
      </div>
      <div className='absolute top-30 min-[940px]:max-[1115px]:top-44 max-[700px]:top-40 max-[950px]:top-44 flex-col w-full  justify-center px-[10vw] max-[530px]:hidden'>
        <div className='w-full flex min-[665px]:max-[970px]:flex-col max-[665px]:flex max-[665px]:justify-between max-[970px]:justify-center max-[970px]:items-center max-[970px]:gap-y-4 max-[970px]:mt-4 justify-between p-4'>
          <a href="/">
            <img 
              src="logo-en-removebg.png"
              alt="Alpha MSH logo"
              className='w-[16vw] max-[950px]:w-[200px] h-auto object-contain' 
            />
          </a>
          <div className='right-1/4 flex max-[665px]:flex-col justify-center items-center'>
            <p className='font-bold font-poppins text-2xl max-[775px]:text-xl'>Follow us <span className='max-[665px]:hidden'>on Social Media</span></p>
            <div className='w-20 h-1/5 border-b-4 border-black max-[665px]:m-4'></div>
            <div className='flex space-x-4 justify-center items-center ml-4'>
              <a href='' rel="noopener noreferrer">
                <FaFacebookSquare className='w-12 h-12 max-[775px]:w-7 max-[775px]:h-7 hover:rotate-12 hover:scale-125 hover:text-blue-700'/>
              </a>
              <a href='' rel="noopener noreferrer">
                <FaTelegram className='w-12 h-12 max-[775px]:w-7 max-[775px]:h-7 hover:rotate-12 hover:scale-125 hover:text-blue-400'/>
              </a>
              <a href='' rel="noopener noreferrer">
                <FaLinkedin className='w-12 h-12 max-[775px]:w-7 max-[775px]:h-7 hover:rotate-12 hover:scale-125 hover:text-blue-700'/>
              </a>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between bg-gray-300/30 p-4 border-b-4 border-blue-600/30 gap-x-12 border-t-4 border-t-red-600/30 rounded-2xl'>
          <div className='w-1/4 max-[970px]:hidden transition-all duration-500 ease-in-out min-[1360px]:text-lg'>
            <span className='text-xl font-bold font-poppins'>ALPHA MSH Co., LTD </span><br/>is a registered Cambodian company providing expert Mechanical, Electrical, Plumbing,
            and Fire Fighting (MEPF) system installations
          </div>
          <div className='flex w-3xl justify-evenly max-[875px]:justify-between'>
            <div className='w-1/4 max-[865px]:w-1/3'>
              <span className='text-lg min-[1360px]:text-xl font-bold font-poppins'>About Us</span><br />
              <ul className='ml-2 mt-3 space-y-1 min-[1360px]:text-lg'>
                <li>
                  <a href=''>Who we are</a>
                </li>
                <li>
                  <a href=''>Speech from the CEO</a>
                </li>
                <li>
                  <a href=''>Vision & Mission</a>
                </li>
                <li>
                  <a href=''>Team Members</a>
                </li>
              </ul>
            </div>
            <div className='w-1/4 ml-4 max-[865px]:w-1/3'>
              <span className='text-lg min-[1360px]:text-xl font-bold font-poppins'>Our Services</span><br />
              <ul className='ml-2 mt-3 space-y-1 min-[1360px]:text-lg'>
                <li>
                  <a href=''>Mechanical Services</a>
                </li>
                <li>
                  <a href=''>Electrical Services</a>
                </li>
                <li>
                  <a href=''>Plumbing Services</a>
                </li>
              </ul>
            </div>
            <div className='w-1/6 ml-4 max-[816px]:w-1/3'>
              <span className='text-lg min-[1360px]:text-xl font-bold font-poppins'>Our Project</span><br/>
              <ul className='ml-2 mt-3 space-y-1 min-[1360px]:text-lg'>
                <li>
                  <a href=''>In Progress</a>
                </li>
                <li>
                  <a href=''>Completed</a>
                </li>
                <li>
                  <a href=''>Future</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='max-[530px]:hidden'>
        <p className='text-center text-gray-600 p-8 font-poppins'>© 2023 Alpha MSH Co., LTD. All rights reserved.</p>
      </div>
      <div className='max-[530px]:hidden  w-full h-4 bg-blue-600'></div>



      {/* for mobile */}
      <div className='relative w-full min-[530px]:hidden bg-gray-300'>
        <img 
          src="/worldMap.jpg" 
          alt="Background image" 
          className='object-cover w-full h-[650px] max-[315px]:h-[750px] min-[315px]:max-[370px]:h-[670px] bg-gray-300 blur-sm'
        />
        <div className='absolute top-5 left-2 flex flex-wrap gap-y-8 gap-x-16'>
          <div className='w-fit'>
            <span className='text-lg min-[1360px]:text-xl font-bold font-poppins'>About Us</span><br />
            <ul className='ml-2 mt-3 space-y-1 min-[1360px]:text-lg'>
              <li>
                <a href=''>Who we are</a>
              </li>
              <li>
                <a href=''>Speech from the CEO</a>
              </li>
              <li>
                <a href=''>Vision & Mission</a>
              </li>
              <li>
                <a href=''>Team Members</a>
              </li>
            </ul>
          </div>
          <div className='w-fit'>
            <span className='text-lg min-[1360px]:text-xl font-bold font-poppins'>Our Services</span><br />
            <ul className='ml-2 mt-3 space-y-1 min-[1360px]:text-lg'>
              <li>
                <a href=''>Mechanical Services</a>
              </li>
              <li>
                <a href=''>Electrical Services</a>
              </li>
              <li>
                <a href=''>Plumbing Services</a>
              </li>
            </ul>
          </div>
          <div className='w-fit'>
            <span className='text-lg min-[1360px]:text-xl font-bold font-poppins'>Our Project</span><br/>
            <ul className='ml-2 mt-3 space-y-1 min-[1360px]:text-lg'>
              <li>
                <a href=''>In Progress</a>
              </li>
              <li>
                <a href=''>Completed</a>
              </li>
              <li>
                <a href=''>Future</a>
              </li>
            </ul>
          </div>
          <div className='w-full gap-y-6'>
            {/* <div> */}
              <span className='text-lg min-[1360px]:text-xl font-bold font-poppins'>Our Company</span><br/>
              <a href="/">
                <img 
                  src="logo-en-removebg.png"
                  alt="Alpha MSH logo"
                  className='w-[16vw] max-[950px]:w-[200px] h-auto object-contain m-5' 
                />
              </a>
            {/* </div> */}
            <div className='w-full flex items-center justify-evenly mt-10'>
              <a href='' rel="noopener noreferrer">
                <FaFacebookSquare className='max-[775px]:w-8 max-[775px]:h-8 hover:rotate-12 hover:scale-125 hover:text-blue-700'/>
              </a>
              <a href='' rel="noopener noreferrer">
                <FaTelegram className='max-[775px]:w-8 max-[775px]:h-8 hover:rotate-12 hover:scale-125 hover:text-blue-400'/>
              </a>
              <a href='' rel="noopener noreferrer">
                <FaLinkedin className='max-[775px]:w-8 max-[775px]:h-8 hover:rotate-12 hover:scale-125 hover:text-blue-700'/>
              </a>
            </div>
            <p className='text-center text-sm text-gray-600 p-4 mt-8 bg-amber-300 font-poppins mr-2'>© 2023 Alpha MSH Co., LTD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer