"use client"

import React from "react"
import styled from "styled-components"
import LinkedinIcon from "../../public/Linkedin-Icon"
import XIcon from "../../public/X-Icon"
import Logo from "../../public/Logo"
import { GreenButton } from "../styles"

const FooterContainer = styled.div`
    width: 100%;
    height: 512px;
    border-radius: 45px 45px 0 0;
    padding-top: 55px;
    padding-bottom: 50px;
    padding-left: 60px;
    padding-right: 60px;
    gap: 50px;
    background-color: var(--dark);
`

const FooterNavegation = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const FooterContact = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 66px;
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 332px;
    padding: 0 20px;
`

const Heading = styled.h2`
    width: fit-content;
    align-self: flex-start;
    color: var(--black);
    padding: 0px 7px 0px 7px;
    background-color: var(--green);
    border-radius: 7px;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
`

const ContactText = styled.div`
    width: 332px;
    gap:20px;
    
    p{
        color: var(--white);
        font-size: 18px;
        font-weight: 400;
        line-height: 100%;
    }
`

const NewsletterForm = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--darkGrey);
    border-radius: 14px;
    padding: 58px 40px 58px 40px;
    gap: 20px;
`

const EmailInput = styled.input`
    appearance: none;
    padding: 22px 35px 22px 35px;
    border-radius: 14px;
    background-color: var(--darkGrey);
    border: 1px solid var(--white);
    color: var(--white);
    width: 300px;
    height: 67px;
    gap: 10px;
    font-size: 18px;
    font-weight: 400;
    
    &::placeholder {
        color: var(--white);
    }

    &:focus {
        outline: none;
    }
`

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  a {
    color: var(--white);
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0%;
  }
`

const NavIcons = styled.a`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Policy = styled.div`
    padding-top: 50px;
    font-size: 18px;
    line-height: 28px;
    color: var(--white);
    font-weight: 400;
    border-top: 1px solid var(--white);
    margin-top: 50px;
    display: flex;
    gap: 40px;

    a {
        text-decoration: underline;
        cursor: pointer;
    }
`

const navigationLinks = [
    { href: "#about", label: "About us" },
    { href: "#services", label: "Services" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" }
];

export default function Footer() {
    return (
        <FooterContainer>
            <FooterNavegation>
                <a href="/" alt="Positivus logo">
                    <Logo fill="var(--white)" />
                </a>

                <NavLinks>
                    {navigationLinks.map((link, index) => (
                        <a key={index} href={link.href}>{link.label}</a>
                    ))}
                </NavLinks>
                <NavIcons>
                    <LinkedinIcon fill="var(--dark)" bgCircle="var(--white)" width="30" heigth="30" />
                    <img src="/Facebook-Icon.svg" width={30} height={30}></img>
                    <XIcon fill="var(--dark)" bgCircle="var(--white)"></XIcon>
                </NavIcons>
            </FooterNavegation>
            <FooterContact>
                <ContactInfo>
                    <Heading>
                        Contact us:
                    </Heading>
                    <ContactText>
                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
                    </ContactText>
                </ContactInfo>
                <NewsletterForm>
                    <EmailInput type="email" placeholder="Email" />
                    <GreenButton>Subscribe to news</GreenButton>
                </NewsletterForm>
            </FooterContact>
            <Policy>
                © 2023 Positivus. All Rights Reserved.
                <a>
                    Privacy Policy
                </a>
            </Policy>
        </FooterContainer>
    )
}