import Image from 'next/image';
import React from 'react';

const ServicesCard = ({service}) => {
     return (
          <div>
               <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <Image className='size-[200px] w-full' height={120} width={430} src={service.img} alt={service}/>
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title">{service.title}</h2>
                         <div className="card-actions justify-between items-center">
                              <p className='text-primary font-semibold'> price :${service.price} </p>
                              <button className="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ServicesCard;