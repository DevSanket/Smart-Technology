import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import InforContainer from '@/components/Home/InfoContainer'
import OurMission from '@/components/Home/OurMission'
import OurMachines from '@/components/Home/OurMachines'
import ProjectWork from '@/components/Home/ProjectWork'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="w-full h-full "
    >
      <Header />
     <div className='max-w-[1200px] mx-auto  px-5 md:px-0'>
     <InforContainer />
    <OurMission />
    <OurMachines />
    <ProjectWork />
     
     </div>
    </main>
  )
}
