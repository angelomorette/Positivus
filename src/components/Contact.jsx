"use client"

import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "../styles"

const ContactContainer = styled.div`
    display: flex;
    margin-top: 80px;
    margin-bottom: 140px;
`

const ContactWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 773px;
    background-color: var(--grey);
    border-radius: 45px;
    justify-content: space-between;
    direction: row;
    position: relative;
    align-items: center;
`

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 60px;
  margin-bottom: 80px;
  margin-left: 100px;

  input[type="radio"] {
  appearance: none;
  width: 28px;
  height: 28px;
  border: 2px solid var(--dark);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  background-color: var(--white);
  margin: 0px;
}

input[type="radio"]:checked {
  border-color:  var(--black);
}

input[type="radio"]:checked::after {
  content: '';
  width: 12px;
  height: 12px;
  background-color: var(--green);
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

  label {
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
  }

  > div {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    margin-bottom: 40px;
  }
  
  > div > div {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  > label {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 5px;
  }

  input[type="text"] {
    appearance: none;
    width: 556px;
    height: 59px;
    border: 1px solid var(--dark);
    border-radius: 14px;
    padding: 18px 30px 18px 30px;
    gap: 10px;
    background-color: var(--white);
    margin-bottom: 25px;
  }
  
  
  textarea {
    appearance: none;
    width: 556px;
    height: 190px;
    border: 1px solid var(--dark);
    border-radius: 14px;
    padding: 18px 30px 18px 30px;
    gap: 10px;
    background-color: var(--white);
    margin-bottom: 40px;
    resize: none;
  }

  input[type="text"]:focus,
  textarea:focus {
  outline: none;
}
`

const ContactButton = styled(PrimaryButton)`
  width: 556px;
  height: 68px;
`

const IllustrarionDiv = styled.div`
    position: absolute;
    right: -305px;
`

export default function Contact() {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactForm>
          <div>
            <div>
              <input type="radio" id="SayHi" name="contactType" value="Say Hi" />
              <label htmlFor="SayHi">Say Hi</label>
            </div>
            <div>
              <input type="radio" id="Quote" name="contactType" value="Get a Quote" />
              <label htmlFor="Quote">Get a Quote</label>
            </div>
          </div>

          <label type="text">Name</label>
          <input type="text" aria-label="Name" placeholder="Name" />
          <label type="email">Email*</label>
          <input type="text" aria-label="Email" placeholder="Email" required />

          <label type="text">Message*</label>
          <textarea aria-label="Message" placeholder="Message" required></textarea>
          <ContactButton>Send Message</ContactButton>
        </ContactForm>
        <IllustrarionDiv>
          <img src={"/Contact-Illustration.svg"} width={649.86} height={648} />
        </IllustrarionDiv>
      </ContactWrapper>
    </ContactContainer>
  )
}