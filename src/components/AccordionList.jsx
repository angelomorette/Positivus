'use client'

import React, { useState } from 'react'
import styled from 'styled-components'

const AccordionSection = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 140px;
  flex-direction: column;
`

const AccordionWrapper = styled.div`
  margin-bottom: 30px;
`

const AccordionCard = styled.div`
  background-color: ${({ isOpen }) => (isOpen ? '#B9FF66' : '#F3F3F3')};
  border-radius: 45px;
  box-shadow: 0 5px 0 #000;
  padding: 30px;
  width: 100%;
  transition: background-color 0.3s;
  border: 1px solid #000;
  padding: 41px 60px 41px 60px;
`

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  height: 77px;

  .number {
    font-size: 60px;
    font-weight: 500;
    line-height: 100%;
  }

  .label {
    font-size: 30px;
    font-weight: 500;
    text-decoration: none;
  }
`

const AccordionContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 30px;
  border-top: 1px solid #000;
  padding-top: 30px;
`

const AccordionItem = ({ number, title, description, isOpen, toggle }) => (
    <AccordionWrapper>
        <AccordionCard isOpen={isOpen}>
            <AccordionHeader onClick={toggle}>
                <Title>
                    <div className="number">{number}</div>
                    <div className="label">{title}</div>
                </Title>
                {isOpen ? (
                    <img src='/Minus.svg'></img>
                ) : (
                    <img src='/Plus.svg'></img>
                )}
            </AccordionHeader>
            {isOpen && <AccordionContent>{description}</AccordionContent>}
        </AccordionCard>
    </AccordionWrapper>
)

export default function AccordionList() {
    const [openIndex, setOpenIndex] = useState(0)

    const data = [
        {
            number: '01',
            title: 'Consultation',
            description:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
        },
        {
            number: '02',
            title: 'Research and Strategy Development',
            description:
                'Lorem ipsum dolor sit amet. Et impedit commodi id perferendis quidem ea nulla nulla aut modi eaque aut dolorem vitae aut perferendis quisquam qui consequatur commodi.'
        },
        {
            number: '03',
            title: 'Implementation',
            description:
                'Lorem ipsum dolor sit amet. Et impedit commodi id perferendis quidem ea nulla nulla aut modi eaque aut dolorem vitae aut perferendis quisquam qui consequatur commodi.'
        },
        {
            number: '04',
            title: 'Monitoring and Optimization',
            description:
                'Lorem ipsum dolor sit amet. Et impedit commodi id perferendis quidem ea nulla nulla aut modi eaque aut dolorem vitae aut perferendis quisquam qui consequatur commodi.'
        },
        {
            number: '05',
            title: 'Reporting and Communication',
            description:
                'Lorem ipsum dolor sit amet. Et impedit commodi id perferendis quidem ea nulla nulla aut modi eaque aut dolorem vitae aut perferendis quisquam qui consequatur commodi.'
        },
        {
            number: '06',
            title: 'Continual Improvement',
            description:
                'Lorem ipsum dolor sit amet. Et impedit commodi id perferendis quidem ea nulla nulla aut modi eaque aut dolorem vitae aut perferendis quisquam qui consequatur commodi.'
        }
    ]

    return (
        <AccordionSection>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    {...item}
                    isOpen={openIndex === index}
                    toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
            ))}
        </AccordionSection>
    )
}
