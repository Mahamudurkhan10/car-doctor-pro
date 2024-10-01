'use client'
import Social from '@/Components/Shared/Social';
import axios from 'axios';
import { useSession } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
const SingUp = () => {
     const session = useSession()
     const router = useRouter()
     const handleSingUp = async (e) => {
          
          e.preventDefault()
          const newUser = {
              name :  e.target.name.value,
              email :  e.target.email.value,
              password :  e.target.password.value
          }
         if(!session.data){
          // const resp = await fetch("http://localhost:3001/singup/api",{
          //      method:'POST',
          //      body: JSON.stringify(newUser),
          //      headers:{
          //           "content-type": "application/json"

          //      }
               
          // })
          const resp = await axios.post("http://localhost:3000/signup/api",newUser)
          console.log(resp);
         if(resp.status === 200){
          Swal.fire({
               title: 'Success!',
               text: 'You have signed up successfully.',
               icon: 'success',
               confirmButtonText: 'OK'
           });
          e.target.reset();
           router.push('/login')
         }
         }else{
          Swal.fire({
               title: 'Already Logged In!',
               text: 'You are already logged in. To sign up, you need to log out first.',
               icon: 'info',
               confirmButtonText: 'OK'
           });
         }

     }
     return (
          <div className='container mx-auto py-24 text-slate-900'>
               <div className='grid grid-cols-2 gap-12'>

                    <div>
                         <Image src="/assets/images/login/login.svg" height={540} width={540} alt='login image' />
                    </div>
                    <div className='border-2 p-12 '>
                         <form onSubmit={handleSingUp} action="" className='space-y-4 ml-5 '>
                              <h1 className='text-primary font-bold text-center text-2xl'> Sing Up </h1>
                              <div>
                                   <label htmlFor="name"> Name </label> <br />

                                   <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full  " />
                              </div>
                              <div>
                                   <label htmlFor="email"> Email </label> <br />

                                   <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full  " />
                              </div>
                              <div>
                                   <label htmlFor="password"> Password </label> <br />

                                   <input type="password" required name='password' placeholder="Type here password" className="input input-bordered w-full  " />
                              </div>
                              <div>
                                   <input className='btn w-full btn-primary' type="submit" value="singUp" />
                              </div>
                         </form>
                         <div className='text-center space-y-4 mt-5'>
                              <h1> or sign in with  </h1>
                              <div>
                                   <Social></Social>
                              </div>
                              <h1 className='mt-6'> Already Have an account ? <Link href={'/login'} className='text-xl text-primary'> Login   </Link> </h1>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingUp; 