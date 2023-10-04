import React from "react";
import { PaddingContainer, FlexContainer, Heading, ParaText, BlueText, IconContainer, } from "../styles/Global.styled";
import { ShowcaseImageCard, ShowcaseParticleContainer, Particle } from "../styles/Showcase.styled";
import {BsLinkedin, BsGithub,BsTwitter,BsInstagram} from "react-icons/bs";
import ShowcaseImg from '../assets/My-Img.png';
import BackgroundImg from '../assets/particle.png';
import { color, motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variant";
import TopFadeImage from '../assets/top.png';
import LeftFadeImage from '../assets/left.png';
// import RightFadeImage from '../assets/right.png';
import { FadeImage } from "../styles/Global.styled";

const Showcase = () => {
    return (
        
        <div>
            <FadeImage src={TopFadeImage} top="-8vh" left="-2vw"/>
            <FadeImage src={TopFadeImage} top="-8vh" right="-5vw" />
            <FadeImage src={TopFadeImage} top="-10vh" />
            
        <PaddingContainer
            id="Home"
            left="6%"
            top="9%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
            responsiveTop="8rem"
        > 
        

                <FlexContainer
                    responsiveFlex
                    responsiveDirection="column-reverse"
                    fullwidthchild
                >
                    <ShowcaseParticleContainer
                        innerWidth
                        as={motion.div}
                        variants={fadeInLeftVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <ShowcaseImageCard justify="flex-end" innerWidth>
                            <img src={ShowcaseImg} alt="showcase" />
                        </ShowcaseImageCard>
                        <Particle
                            as={motion.img}
                            animate={{
                                x: [0,100,0],
                                rotate: 360,
                                scale: [0.7,0.5,0.8]
                            }}
                            transition={{
                                duration:18,
                                repeat: Infinity,
                            }}
                            src={BackgroundImg}
                            alt="particle"
                            top="-65px"
                            left="10px"
                            rotate="60deg"
                         />
                         <Particle
                            as={motion.img}
                            animate={{
                                y: [0,100,0],
                                rotate: 360,
                                scale: [0.8,0.5,0.8]
                            }}
                            transition={{
                                duration:15,
                                repeat: Infinity,
                            }}
                            src={BackgroundImg}
                            alt="particle"
                            top="50px"
                            left="500px"
                            rotate="0deg"
                         />
                         <Particle
                            as={motion.img}
                            animate={{
                                y: [0,-100,0],
                                rotate: 360,
                                scale: [0.8,0.3,0.8]
                            }}
                            transition={{
                                duration:13,
                                repeat: Infinity,
                            }}
                            src={BackgroundImg}
                            alt="particle"
                            top="500px"
                            left="5px"
                            rotate="60deg"
                         />
                </ShowcaseParticleContainer>
            
                <PaddingContainer top="3%">
                <motion.div
                    
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Heading as="h4" size="h4">Hello!</Heading>
                    <Heading
                        as="h2"
                        size="h2"
                        top="0.5rem"
                        bottom="1rem"
                    >I'm <BlueText>Bapi Mandal</BlueText></Heading>
                    <Heading
                        as="h3"
                        size="h3"
                    >
                        I'm a <BlueText>Frontend Developer</BlueText>
                    </Heading>
                    <ParaText as="p" top="2rem" bottom="4rem">
                        Hello, My name is Bapi Mandal. I'm a front-end developer with 1 years of
                        experience in creating and designing user-friendly websites
                        web applications and Android applications.
                    </ParaText>
                    <FlexContainer align="center" gap="20px" responsiveFlex>
                        <IconContainer color="blue" size="1.6rem">
                            <a href="https://www.linkedin.com/in/bapi-mandal-2247161b7/" target="_blank">
                            <BsLinkedin />
                            </a>
                            
                        </IconContainer>
                        <IconContainer color="blue" size="1.6rem">
                            <a href="https://github.com/Bama1030" target="_blank"><BsGithub /></a>
                            
                        </IconContainer>
                        <IconContainer color="blue" size="1.6rem">
                            <a href="https://twitter.com/BapiMan76595572" target="_blank"><BsTwitter /></a>
                            
                        </IconContainer>
                        <IconContainer color="blue" size="1.6rem">
                            <a href="https://www.instagram.com/bapi_mandal.official/" target="_blank"><BsInstagram /></a>
                            
                        </IconContainer>
                    </FlexContainer>
                </motion.div>
                
                </PaddingContainer>
                <FadeImage src={LeftFadeImage} top="3vh" left="-10vw" />
                <FadeImage src={LeftFadeImage} top="5vh" left="-10vw" />
                {/* <FadeImage src={RightFadeImage} top="8vh" left="70vw"/>
                <FadeImage src={RightFadeImage} top="12vh" left="70vw"/> */}
                </FlexContainer>
                
                
        </PaddingContainer>
        </div>
    )
}

export default Showcase;