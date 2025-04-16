'use client'

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import PositiveLogo from '../../public/Logo.svg'
import Ilustration from '../../public/Illustration.svg'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-bottom: 140px;
`

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  a {
    text-decoration: none;
    color: #000000;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0%;
  }
`

const NavActions = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`

// Hero section components
const HeroSection = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 108.54px;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 531px;
  gap: 35px;
`

const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: 60px;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0px;
`

const HeroDescription = styled.span`
  font-weight: 400;
  font-size: 400;
  line-height: 28px;
  letter-spacing: 0%;
`

const OutlinedButton = styled.button`
  width: 231px;
  height: 68px;
  gap: 10px;
  padding: 20px 35px;
  border-radius: 14px;
  border-width: 1px;
  border: 1px solid #191A23;
  background-color: #fff;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  gap: 10px;
`

const PrimaryButton = styled.button`
  width: 264px;
  height: 68px;
  padding: 20px 35px;
  border-radius: 14px;
  border: solid #191A23;
  background-color: #191A23;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  gap: 10px;
`

const LogoGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const navigationLinks = [
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" }
];

const logos = [
  { src: '/Amazon.svg', alt: 'Amazon logo' },
  { src: '/Dribbble.svg', alt: 'Dribbble logo' },
  { src: '/HubSpot.svg', alt: 'HubSpot logo' },
  { src: '/Netflix.svg', alt: 'Netflix logo' },
  { src: '/Notion.svg', alt: 'Notion logo' },
  { src: '/Zoom.svg', alt: 'Zoom logo' },
];

export default function LandingPage() {
  return (
    <PageContainer>
      <NavBar>
        <a href="/">
          <Image
            src={PositiveLogo}
            alt="Positivus logo"
            width={219.54}
            height={36}
            style={{ width: '219.54px', height: '36px' }}
          />
        </a>
        <NavActions>
          <NavLinks>
            {navigationLinks.map((link, index) => (
              <a key={index} href={link.href}>{link.label}</a>
            ))}
          </NavLinks>
          <OutlinedButton>Request a quote</OutlinedButton>
        </NavActions>
      </NavBar>

      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Navigating the digital landscape for success
          </HeroTitle>
          <HeroDescription>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </HeroDescription>
          <PrimaryButton>Book a consultation</PrimaryButton>
        </HeroContent>
        <Image
          src={Ilustration}
          width={600.46}
          height={515}
          style={{ width: '600.46px', height: '515px' }}
        />
      </HeroSection>

      <LogoGrid>
        {logos.map((logo, index) => (
          <LogoContainer key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: '100%', height: '48px', mixBlendMode: 'luminosity' }}
            />
          </LogoContainer>
        ))}
      </LogoGrid>
    </PageContainer>
  )
}