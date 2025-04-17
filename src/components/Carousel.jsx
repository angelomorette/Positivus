'use client'

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ArrowRight from '../../public/Arrow-right.svg'
import ArrowLeft from '../../public/Arrow-left.svg'
import styled from 'styled-components';
import Dot from '../../public/Dot';
import { colors } from '../styles/Theme' 

const testimonials = [
  {
    id: 1,
    content: "We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp."
  },
  {
    id: 2,
    content: "We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp."
  },
  {
    id: 3,
    content: "We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp."
  },
  {
    id: 4,
    content: "We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp."
  },
  {
    id: 5,
    content: "We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp."
  }
];

const CarouselContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 140px;
  position: relative;
  max-width: 1240px;
  height: 625px;
  padding-top: 84px;
  padding-bottom: 68px;
  background: ${colors.primary};
  border-radius: 45px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
`;

const CarouselSlide = styled.div`
  flex: 0 0 33.333%;
  padding: 0 50px;
  opacity: ${props => props.isSelected ? 1 : 0.5};
  transition: opacity 0.3s ease;
`;

const TestimonialCard = styled.div`
  position: relative;
  background: #1A1F2C;
  border: 1px solid #2A3040;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 auto;
  width: 606px;
  height: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${props => props.isSelected ? 'scale(1)' : 'scale(0.9)'};
  transition: transform 0.3s ease;
`;

const TestimonialText = styled.p`
  color: #C8C8C9;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
`;

const AuthorName = styled.h3`
  color: #2962FF;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AuthorPosition = styled.p`
  color: #8E9196;
  font-size: 0.875rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  margin-top: auto;
  width: 564px;
  position: absolute;
  bottom: 68px;
  left: 50%;
  transform: translateX(-50%);
`;

const NavigationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  color: #C8C8C9;
  transition: all 0.2s;

  &:hover {
    color: #2962FF;
    background: rgba(41,98,255,0.1);
  }

  &:focus {
    outline: none;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const DotWrapper = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <CarouselContainer>
      <CarouselWrapper ref={emblaRef}>
        <CarouselTrack>
          {testimonials.map((testimonial, index) => (
            <CarouselSlide 
              key={testimonial.id}
              isSelected={index === selectedIndex}
            >
              <TestimonialCard isSelected={index === selectedIndex}>
                <TestimonialText>"{testimonial.content}"</TestimonialText>
                <AuthorName>{testimonial.author}</AuthorName>
                <AuthorPosition>{testimonial.position}</AuthorPosition>
              </TestimonialCard>
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      <NavigationContainer>
        <NavigationButton onClick={scrollPrev}>
          <img src='/Arrow-left.svg' alt='Arrow Left' />
        </NavigationButton>

        <DotsContainer>
          {scrollSnaps.map((_, index) => (
            <DotWrapper
              key={index}
              onClick={() => scrollTo(index)}
            >
              <Dot fill={index === selectedIndex ? '#00FF00' : '#ffffff'} />
            </DotWrapper>
          ))}
        </DotsContainer>

        <NavigationButton onClick={scrollNext}>
          <img src='/Arrow-right.svg' alt='Arrow Right'/>
        </NavigationButton>
      </NavigationContainer>
    </CarouselContainer>
  )
}

export default CarouselSection; 