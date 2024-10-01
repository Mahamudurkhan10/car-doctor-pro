'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCartOutline ,IoSearchSharp} from "react-icons/io5";
const Navbar = () => {
     const session = useSession()
     console.log(session); 
     const navItems = [
          {
               title:'Home',
               path:'/'
          },
          {
               title:'About',
               path:'/about'
          },
          {
               title:'Services',
               path:'/services'
          },
          {
               title:'Blog',
               path:'/blog'
          },
          {
               title:'Contact',
               path:'/contact'
          },
     ]
     return (
          <div className='bg-base-100 text-slate-900'>
               <div className="navbar container mx-auto ">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4">
                                {navItems.map(item => <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}> {item.title} </Link>)}
                              </ul>
                         </div>
                         <Link href={'/'}>
                          <Image src="/assets/logo.svg" height={60} width={100} alt='logo'/>
                         </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal space-x-6  px-1 ">
                         {navItems.map(item => <Link className='font-semibold hover:text-primary duration-300  ' href={item.path} key={item.path}> {item.title} </Link>)}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <div className='flex space-x-3 items-center flex-col lg:flex-row justify-center'>
                         <IoCartOutline className='text-xl'  />
                         <IoSearchSharp className='text-xl'></IoSearchSharp>
                         <a className="btn btn-outline btn-primary px-8">Appointment</a>
                          { !session.data?
                              <Link href={'/login'} className="btn mt-3 lg:mt-0 lg:ml-4 btn-primary px-8"> Login </Link>:<button onClick={()=> signOut()} className='btn btn-warning px-8'> LogOut </button>
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;