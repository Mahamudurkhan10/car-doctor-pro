import React from 'react';
import { services } from '@/lib/services';
import ServicesCard from '../Cards/ServicesCard';
const Services = () => {
     return (
          <div className='text-slate-900 mt-6 '>
               <div className='text-center container space-y-2 mx-auto'>
                    <h1 className='text-2xl font-bold text-orange-600'>Service</h1>
                    <h1 className='text-5xl'> Our Service Area </h1>
                    <p className='w-1/2 mx-auto'> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
               </div>
               <div className='container mx-auto mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3'>
                    {
                         services.map((service) => (
                              <ServicesCard service={service} key={service.id}></ServicesCard>
                         ))
                    }
               </div>
          </div>
     );
};

export default Services;