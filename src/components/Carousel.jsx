'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import Dot from '../../public/Dot';

const testimonials = [
  {
    id: 1,
    content:
      'We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.',
    author: 'John Smith',
    position: 'Marketing Director at XYZ Corp.',
  },
  {
    id: 2,
    content:
      'We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.',
    author: 'John Smith',
    position: 'Marketing Director at XYZ Corp.',
  },
  {
    id: 3,
    content:
      'We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.',
    author: 'John Smith',
    position: 'Marketing Director at XYZ Corp.',
  },
  {
    id: 4,
    content:
      'We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.',
    author: 'John Smith',
    position: 'Marketing Director at XYZ Corp.',
  },
  {
    id: 5,
    content:
      'We have been working with PositHue for the past year and have seen a significant increase in website traffic since. Their team is highly professional, responsive, and truly cares about the success of our business. We highly recommend PositHue to any company looking to grow their online presence.',
    author: 'John Smith',
    position: 'Marketing Director at XYZ Corp.',
  },
];

const CarouselContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 140px;
  position: relative;
  max-width: 1240px;
  height: 625px;
  padding-top: 84px;
  padding-bottom: 68px;
  background: var(--dark);
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
  opacity: ${props => (props.$isSelected ? 1 : 0.5)};
  transition: opacity 0.3s ease;
`;

const TestimonialCard = styled.div`
  position: relative;
  width: 606px;
  height: 266px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${props => (props.$isSelected ? 'scale(1)' : 'scale(0.9)')};
  transition: transform 0.3s ease;
`;

const CardBackground = styled.img.attrs({
  src: '/Bubble.svg',
  alt: 'Bubble background',
})`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  object-fit: contain;
`;

const TestimonialText = styled.p`
  width: 502px;
  color: #c8c8c9;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
  z-index: 1;
  position: relative;
  margin: 0px;
`;

const Author = styled.div`
  margin-top: 20px;
  margin-left: 80px;
  h4 {
    margin: 0px;
    color: var(--green);
    font-weight: 600;
  }
  p {
    margin: 0px;
    color: var(--white);
    font-size: 18px;
    font-weight: 400;
    line-height: 100%;
  }
`;

const AuthorPosition = styled.p``;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  const scrollTo = useCallback(index => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <CarouselContainer>
      <CarouselWrapper ref={emblaRef}>
        <CarouselTrack>
          {testimonials.map((testimonial, index) => (
            <CarouselSlide key={testimonial.id} $isSelected={index === selectedIndex}>
              <TestimonialCard $isSelected={index === selectedIndex}>
                <CardBackground />
                <TestimonialText>"{testimonial.content}"</TestimonialText>
              </TestimonialCard>
              <Author>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </Author>
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      <NavigationContainer>
        <NavigationButton onClick={scrollPrev}>
          <img src="/Arrow-left.svg" alt="Arrow Left" />
        </NavigationButton>

        <DotsContainer>
          {scrollSnaps.map((_, index) => (
            <DotWrapper key={index} onClick={() => scrollTo(index)}>
              <Dot fill={index === selectedIndex ? '#00FF00' : '#ffffff'} />
            </DotWrapper>
          ))}
        </DotsContainer>

        <NavigationButton onClick={scrollNext}>
          <img src="/Arrow-right.svg" alt="Arrow Right" />
        </NavigationButton>
      </NavigationContainer>
    </CarouselContainer>
  );
};

export default CarouselSection;
