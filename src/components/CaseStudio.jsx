import React from "react"
import styled from "styled-components"
import LinkComponent from "./LinkComponent"

const CaseCard = styled.div`
  display: flex;
  width: 1234px;
  height: 326px;
  padding: 70px 60px 70px 60px;
  background-color: var(--dark);
  border-radius: 45px;
  border: var(--dark);
  gap: 64px;
  margin-top: 80px;
  margin-bottom: 140px;
  flex-direction: row;
  `

const SectionDescription = styled.p`
  display: flex;
  font-size: 18px;
  font-weight: 400;
  line-height: 100%;
  width: 286px;
  height: 115px;
  flex-direction: column;
  color: #fff;
  gap: 20px;
`

const Divider = styled.div`
    height: auto;
    width: 1px;
    background-color: #fff;
    border: none;
`
export default function CTABlock() {
    return (
        <CaseCard>
            <SectionDescription>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                <LinkComponent label="Learn More" variant="simpleGreen" width='28' height='28' />
            </SectionDescription>
            <Divider />
            <SectionDescription>
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                <LinkComponent label="Learn More" variant="simpleGreen" width='28' height='28' />
            </SectionDescription>
            <Divider />
            <SectionDescription>
                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                <LinkComponent label="Learn More" variant="simpleGreen" width='28' height='28' />
            </SectionDescription>
        </CaseCard>
    )
}