'use client'

import LandingPage from '../components/LandingPage'
import SubHeading from '../components/SubHeading'
import CardSection from '../components/CardSection'
import CTABlock from '../components/CTABlock'
import CaseStudio from '../components/CaseStudio'
import AccordionList from '../components/AccordionList'
import TeamGroup from '../components/TeamGroup'
import CarroselSection from '../components/CarouselSection'

export default function Home() {
  return (
    <>
      <LandingPage />
      <SubHeading title="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
      <CardSection />
      <CTABlock />
      <SubHeading title="Case Studies" description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
      <CaseStudio />
      <SubHeading title="Our Working Process" description="Step-by-Step Guide to Achieving Your Business Goals" />
      <AccordionList />
      <SubHeading title="Team" description="Meet the skilled and experienced team behind our successful digital marketing strategies" />
      <TeamGroup />
      <SubHeading title="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
      <CarroselSection />
      <SubHeading title="Contact Us" description="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
      
    </>
  )
}
