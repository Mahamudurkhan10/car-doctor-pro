import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Social = () => {
     const router = useRouter()
     const session = useSession();
     const handleSocialLogin =async (provider) =>{
          const resp = await signIn(provider,{redirect: false})     
     }
     if(session.status ==='authenticated'){
          router.push('/')
     }
     return (
          <div className='flex justify-center  gap-12'>
               <button onClick={()=>handleSocialLogin('google')} className='btn rounded-full'><FcGoogle /></button>
           
               <button onClick={()=>handleSocialLogin('github')} className='btn rounded-full'><FaGithub /></button>
          </div>
     );
};

export default Social;