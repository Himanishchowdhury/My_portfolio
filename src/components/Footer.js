import React from 'react'

import { PaddingContainer, Heading, BlueText, FlexContainer, } from '../styles/Global.styled'
import { ContactForm, FormInput,FormInput1, FormLabel, } from '../styles/Footer.styled';
import { motion } from 'framer-motion';
import { fadeInBottomVariant } from '../utils/Variant';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import LeftFadeImage from '../assets/left.png';
import RightFadeImage from '../assets/right.png';
import { FadeImage } from "../styles/Global.styled";


const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0qifhpq', 'template_tynduxo',form.current, 'Rkg3DgYecdH1jteI4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
        console.log(alert("Successfully deliver the message"))
      };

  return (
    <div>
   <PaddingContainer
        id="Contact"
        top="8%"
        bottom="8%"
   >
        <Heading 
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible" 
        size="h4" align="center">
            CONTACT
        </Heading>
        <Heading
            as={motion.h2}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible" 
            size="h2"
            align="center"
            top="0.5rem"
        >
            Contact <BlueText>Me Here</BlueText>
        </Heading>
        <PaddingContainer top="3rem">
            <FlexContainer justify="center">
                <ContactForm
                    ref={form}
                    onSubmit={sendEmail}
                    as={motion.form}
                    variants={fadeInBottomVariant}
                    initial="hidden"
                    whileInView="visible" 
                >
                    <PaddingContainer bottom="2rem">
                        <FormLabel>Name:</FormLabel>
                        <FormInput
                        type="text"
                        name='name'
                        placeholder="Enter Your Name"
                        />
                    </PaddingContainer>
                    <PaddingContainer bottom="2rem">
                        <FormLabel>Email:</FormLabel>
                        <FormInput
                        type="email"
                        name='email'
                        placeholder="Enter Your Email"
                        />
                    </PaddingContainer>
                    <PaddingContainer bottom="2rem">
                        <FormLabel>Message:</FormLabel>
                        <FormInput
                        as="textarea"
                        name='message'
                        placeholder="Enter Your message"
                        />
                    </PaddingContainer>
                    <FlexContainer justify="center" responsiveFlex>
                    <FormInput1 type="submit" value="Send Message" />
                    </FlexContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
   </PaddingContainer>
                <FadeImage src={LeftFadeImage} top="306vh" left="-10vw" />
                <FadeImage src={LeftFadeImage} top="309vh" left="-10vw" />
                <FadeImage src={RightFadeImage} top="333vh" right="-3vw"/>
                <FadeImage src={RightFadeImage} top="330vh" right="-3vw"/>
   
   </div>
  )
}

export default Footer
