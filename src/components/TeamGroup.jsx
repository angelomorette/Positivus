"use client"

import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "../styles"
import LinkedinIcon from "../../public/Linkedin-Icon"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 45px;
  border: 1px solid #191A23;
  box-shadow: 0px 5px 0px 0px #191A23;
  padding: 40px 35px 0px 35px;
`

const TeamGrid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 331px 354px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const AvatarContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 317px;
  height: 102.82px;
  position: relative;
`

const NameJob = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: end;

  h4 {
    font-size: 20px;
    font-weight: 500;
    line-height: 100%;
    margin: 0;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 100%;
    margin: 0;
  }
`

const Divider = styled.div`
  border: none;
  border-top: 1px solid #333;
  margin-top: 28px;
  margin-bottom: 28px;
`

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 100%;
  margin: 0;
`

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 34px;
  height: 34px;

  img {
    width: 100%;
    height: 100%;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 35px 0px 35px;
`

// const PrimaryButton = styled.button`
//   width: 264px;
//   height: 68px;
//   padding: 20px 35px;
//   border-radius: 14px;
//   border: solid #191A23;
//   background-color: #191A23;
//   color: #fff;
//   cursor: pointer;
//   font-weight: 400;
//   font-size: 20px;
//   line-height: 28px;
//   white-space: nowrap;
//   gap: 10px;
//   align-items: center;
//   justify-content: center;
// `

const TeamDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: end;
  margin-top: 80px;
  margin-bottom: 100px;
`

const TeamCard = ({ name, jobTitle, description, image }) => (
  <Card>
    <Header>
      <AvatarContainer>
        <img src={image} alt={name} />
        <NameJob>
          <h4>{name}</h4>
          <p>{jobTitle}</p>
        </NameJob>
        <IconContainer>
          <LinkedinIcon />
        </IconContainer>
      </AvatarContainer>
    </Header>
    <Divider />
    <Description>{description}</Description>
  </Card>
)

export default function TeamGroup() {
  const data = [
    {
      name: 'John Smith',
      jobTitle: 'CEO and Founder',
      description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      image: 'John-Smith-Picture.svg'
    },
    {
      name: 'Jane Doe',
      jobTitle: 'Director of Operations',
      description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      image: 'Jane-Doe-Picture.svg'
    },
    {
      name: 'Michael Brown',
      jobTitle: 'Senior SEO Specialist',
      description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      image: 'Michael-Brown.svg'
    },
    {
      name: 'Emily Johnson',
      jobTitle: 'PPC Manager',
      description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      image: 'Emily-Johnson-Picture.svg'
    },
    {
      name: 'Brian Williams',
      jobTitle: 'Social Media Specialist',
      description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      image: 'Brian-Williams-Picture.svg'
    },
    {
      name: 'Sarah Kim',
      jobTitle: 'Content Creator',
      description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
      image: 'Sarah-Kim-Picture.svg'
    }
  ]

  return (
    <TeamDiv>
      <TeamGrid>
        {data.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </TeamGrid>
      <PrimaryButton>See all team</PrimaryButton>
    </TeamDiv>
  )
}
