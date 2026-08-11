import Hero from '#/components/Hero'
import { createFileRoute } from '@tanstack/react-router'
import  Stats  from '../components/Stats'
import PopularFields from '../components/PopularFields'
import HowItWorks from '../components/HowItWorks'
import Eligibility from '../components/EligibilityCTA'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
 


  return (
    <>
    <Hero />
  <Stats />
  <PopularFields />
  <HowItWorks />
  <Eligibility />
     
    </>
  )
}

export default Home
   
  

