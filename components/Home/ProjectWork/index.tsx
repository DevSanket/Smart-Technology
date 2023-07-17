import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting, faGear, faHardDrive, faPenRuler, faToolbox, faWrench } from '@fortawesome/free-solid-svg-icons'
import DivisionCard from './DivisionCard'

export default function ProjectWork() {
  return (
    <React.Fragment>
        <div className='w-full  flex-col  items-center justify-center'>
       <div className='flex-col space-y-10'>
        <p className='font-bold text-5xl text-center uppercase'>Project Work Division</p>
        
        <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <DivisionCard  icon={faPenRuler} title='Mould Design & Manufacturing' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam expedita repellendus, suscipit porro aspernatur id quae amet dignissimos. Magnam?' color='#FD7070' />
            <DivisionCard  icon={faCompassDrafting} title='Die Design & Manufacturing' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam expedita repellendus, suscipit porro aspernatur id quae amet dignissimos. Magnam?' color='#33FFE7' />
            <DivisionCard  icon={faToolbox} title='Tool & Die Making' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam expedita repellendus, suscipit porro aspernatur id quae amet dignissimos. Magnam?' color='#CFA9CE' />
            <DivisionCard  icon={faGear} title='Jig & Fixture Design & Manufacturing' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam expedita repellendus, suscipit porro aspernatur id quae amet dignissimos. Magnam?' color='#6FE2F9' />
            <DivisionCard  icon={faWrench} title='Manufacturing Of SPM Machines Design and Development' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam expedita repellendus, suscipit porro aspernatur id quae amet dignissimos. Magnam?' color='#FB4040' />
            <DivisionCard  icon={faHardDrive} title='Precise Work Machining & Surface Grinding' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam expedita repellendus, suscipit porro aspernatur id quae amet dignissimos. Magnam?' color='#9AE15F' />
            
        </section>
        </div>
        </div>
    </React.Fragment>
  )
}
