import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LOGO from './logo.webp';
import user from './user.avif';
import ycomb from './ycomb.avif';

function App() {


  return (
    <div className='mt-12  flex flex-col items-center justify-between mx-auto'>
      <p className='text-4xl  font-bold mb-12'>Happy Customers</p>
      <div className='max-w-[100%] relative overflow-x-hidden flex animate-pause   '>
      {[1,2].map((y)=>(
        <div className='flex  animate-scroll '>    
{ [1,2,3,4,5,7,].map((x,index)=>( 
  <div className='relative flex-shrink-0 mr-8 border-[1px] border-gray-200 bg-white shadow-xl w-[25rem] h-[25rem] rounded-xl px-5 py-3'>
    <img src={LOGO} className='w-[6rem] h-[4rem]'/>
    <div className='flex items-center gap-2'>
    <img src={user} className='w-[4rem] h-[4rem] rounded-full'/>
    <div>
      <p className='text-lg font-semibold'>Pranay Rawat{index}</p>
      <p className='text-'>Head of Engg</p>
   
    </div>
   
    </div>
    <p className='text-sm mt-6'>"Dover makes my life as a founder much easier. Being able to outsource initial screenings (which take SO much time) is amazing. Plus, getting inbound automatically is huge –– so far, we've hired two great people with Dover's help!"</p>
    <div className='flex items-center absolute bottom-2 gap-5'>
      <p className='text-sm'>Backed By</p>
    <img src={ycomb} className='w-[8.5rem] h-[3.5rem]' />
      </div>
  </div>
 ))} 
  </div>))}  

      </div>

    </div>
  );
}

export default App;
