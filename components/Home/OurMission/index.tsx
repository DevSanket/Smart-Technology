import React from 'react';
import { faScrewdriverWrench,faPaintBrush, faIndustry, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MissionCard from '@/components/MissionCard';

export default function OurMission() {
  return (
    <div className='w-full  flex  items-center justify-center'>
       <div className='flex-col space-y-10'>
        <p className='font-bold text-5xl text-center uppercase'>Mission Statement</p>
        
       
       <div className='grid grid-cols-4 gap-5 '>
           <MissionCard icon={faScrewdriverWrench} title="Development"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quidem aperiam fuga impedit et accusamus consectetur repellat, sequi eum consequatur." />
           <MissionCard icon={faPaintBrush} title="Design"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quidem aperiam fuga impedit et accusamus consectetur repellat, sequi eum consequatur." />
           <MissionCard icon={faIndustry} title="Manufacturing"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quidem aperiam fuga impedit et accusamus consectetur repellat, sequi eum consequatur." />
           <MissionCard icon={faCheckCircle} title="Quality"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quidem aperiam fuga impedit et accusamus consectetur repellat, sequi eum consequatur." />
       </div>
       
        <p>Our mission is to build our reputation for integrity, excellence, and leadership as one of the 
finest Engineering companies by continuously improving the standards and quality of our 
services; Constantly striving to exceed each client’s expectations; Maintaining our dedication to 
the highest moral principles and; Providing a challenging and secure environment for our 
people.</p>
</div>
    </div>
  )
}
