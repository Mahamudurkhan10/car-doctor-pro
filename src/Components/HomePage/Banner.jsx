
const Banner = () => {
     return (
          <div className="container mx-auto">
               <div className="carousel w-full">
                    {banners.map((banner,inx) =>(
                         <div 
                         style={{
                              backgroundImage:`linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${inx+1}.jpg)`,
                         }}
                         key={inx} 
                         id={`slide${inx+1}`}
                          className="carousel-item relative w-full rounded-xl h-[90vh] bg-top bg-no-repeat ">
                         <div className="h-full w-full flex  pl-36 items-center">
                          <div className="space-y-6">
                          <h1 className="text-5xl font-bold w-2/5"> {banner.title } </h1>
                          <p className="w-2/3"> {banner.description} </p>
                          <button className="btn btn-primary mr-5">Discover More</button>
                          <button className="btn btn-outline btn-primary">Latest Project</button>
                          </div>
                          
                         </div>
                          <div className="absolute   flex justify-between  transform bottom-12 right-12">
                               <a href={banner.prev} className="btn btn-circle mr-4 ">❮</a>
                               <a href={banner.next} className="btn btn-circle btn-primary">❯</a>
                          </div>
                     </div>
                    ))}
                  
                    
                    
               </div>

          </div>
     );
};
const banners = [
     {
          title:'Affordable Price For Car Servicing',
          description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
          next:'#slide2',
          prev:'#slide4',
     },
     {
          title:'Affordable Price For Car Servicing',
          description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
          next:'#slide3',
          prev:'#slide1',
     },
     {
          title:'Affordable Price For Car Servicing',
          description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
          next:'#slide4',
          prev:'#slide2',
     },
     {
          title:'Affordable Price For Car Servicing',
          description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
          next:'#slide1',
          prev:'#slide3',
     },
]

export default Banner;