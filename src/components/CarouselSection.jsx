"use client"

import React from "react"
import styled from "styled-components"
import ArrowRight from '../../public/Arrow-right.svg'
import ArrowLeft from '../../public/Arrow-left.svg'

const Wrapper = styled.div`
  background-color: #191a23;
  border-radius: 50px;
  padding: 60px 80px;
  color: white;
  position: relative;
  overflow: hidden;
`

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: nowrap;
  overflow: hidden;
`

const Balloon = styled.div`
  position: relative;
  border: 1px solid #b9ff66;
  border-radius: 24px;
  padding: 32px;
  max-width: 400px;
  background-color: transparent;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 40px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #191a23;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -11px;
    left: 40px;
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 16px solid #b9ff66;
    z-index: 0;
  }
`

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`

const Name = styled.p`
  font-weight: bold;
  color: #b9ff66;
  margin: 0;
`

const Role = styled.p`
  font-size: 14px;
  color: #ccc;
  margin: 4px 0 0;
`

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 24px;
`

const Dots = styled.div`
  display: flex;
  gap: 8px;
`

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background-color: ${props => (props.active ? "#b9ff66" : "#fff")};
`

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads...",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp"
  },
  {
    text: "Positivus is professional, responsive, and truly cares about the success of our business. We highly recommend them...",
    name: "Jane Doe",
    role: "Head of Growth at ABC Inc"
  },
  {
    text: "Their SEO and PPC strategies helped us scale fast. Great team, great communication!",
    name: "Emily Johnson",
    role: "CMO at FastTrack"
  }
]

export default function CarroselSection() {
  return (
    <Wrapper>
      <Carousel>
        {testimonials.map((t, i) => (
          <Balloon key={i}>
            <TestimonialText>{t.text}</TestimonialText>
            <Name>{t.name}</Name>
            <Role>{t.role}</Role>
          </Balloon>
        ))}
      </Carousel>

      <Controls>
        <ArrowButton>
          <img src='/Arrow-left.svg' />
        </ArrowButton>
        <Dots>
          {testimonials.map((_, i) => (
            <Dot key={i} active={i === 0} />
          ))}
        </Dots>
        <ArrowButton>
          <img src='/Arrow-right.svg' />
        </ArrowButton>
      </Controls>
    </Wrapper>
  )
}
