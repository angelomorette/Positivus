"use client"
import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "../styles"

const CTACard = styled.div`
  display: flex;
  width: 1240px;
  height: 347px;
  background-color: #F3F3F3;
  border: #F3F3F3;
  border-radius: 45px;
  padding: 60px 0px 60px 60px;
  align-items: center;
  margin-top: 100px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 140px;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 227px;
  gap: 26px;
`

const HeroTitle = styled.h3`
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0px;
`
const HeroDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
`

export default function CTABlock() {
    return (
        <CTACard>
            <HeroContent>
                <HeroTitle>
                    Let’s make things happen
                </HeroTitle>
                <HeroDescription>
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </HeroDescription>
                <PrimaryButton>Get your free proposal</PrimaryButton>
            </HeroContent>
            <img src="/Frame-19.svg" alt="CTA illustration" />
        </CTACard>
    )
}