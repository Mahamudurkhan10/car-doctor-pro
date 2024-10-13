'use client'
import Image from 'next/image';
import Link from 'next/link';
import {React} from 'react';
import { signIn } from "next-auth/react"; // Corrected the import

import { useRouter } from 'next/navigation';
import Social from '@/Components/Shared/Social';

const Page = () => {
     // Renamed the component to 'Page'
     
     const router = useRouter()
     const handleLogin = async (e) => {
          e.preventDefault();

          const email = e.target.email.value;
          const password = e.target.password.value;
          const resp = await signIn("credentials", { // Corrected the function name
               email,
               password,
               redirect: false,
          });

         if(resp.status ===200){
          router.push('/')
         }
     };

     return (
          <div className='container mx-auto py-24 text-slate-900'>
               <div className='grid grid-cols-2 gap-12'>
                    <div>
                         <Image src="/assets/images/login/login.svg" height={540} width={540} alt='login image' />
                    </div>
                    <div className='border-2 p-12 '>
                         <form onSubmit={handleLogin} className='space-y-4'>
                              <h1 className='text-primary font-bold text-center text-2xl'>Login</h1>
                              <div>
                                   <label htmlFor="email">Email</label><br />
                                   <input type="text" name='email' placeholder="Type here" className="input input-bordered w-full" />
                              </div>
                              <div>
                                   <label htmlFor="password">Password</label><br />
                                   <input type="password" name='password' placeholder="Type here password" className="input input-bordered w-full" />
                              </div>
                              <div>
                                   <input className='btn w-full btn-primary' type="submit" value="Login" />
                              </div>
                         </form>
                         <div className='text-center space-y-4 mt-5'>
                              <h1>or sign in with</h1>
                              <div >
                                   <Social/>
                              </div>
                              <h1 className='mt-6'>Don not have an account? <Link href={'/singup'} className='text-xl text-primary'>Sign Up</Link></h1>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Page;
