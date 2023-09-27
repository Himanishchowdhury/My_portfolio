import React from "react";
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';

import { SkillsCard, SkillsCardContainer } from "../styles/MySkills.styled";

import { Skills } from "../utils/Data";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../utils/Variant";

const MySkills =()=>{
    return(
        <PaddingContainer
            id="Skills"
            top="10%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <FlexContainer 
            responsiveFlex 
            responsiveDirection="column-reverse"
            fullWidthChild>
                <SkillsCardContainer
                    as={motion.div}
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    {Skills.map((skill) =>(
                        <SkillsCard>
                            <IconContainer size="5rem" color="blue">
                                {skill.icon}
                            </IconContainer>
                            <h4 style={{ color: 'white' }}>
                                {skill.tech}
                            </h4>
                           
                        </SkillsCard>
                    ))}
                </SkillsCardContainer>
                <motion.div
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"

                >
                    <Heading
                            as={motion.h4}
                            variants={fadeInTopVariant}
                            initial="hidden"
                            whileInView="visible"
                            size="h4">
                        MY SKILLS
                    </Heading>
                    <Heading 
                    as={motion.h2}
                    variants={fadeInTopVariant}
                    initial="hidden"
                    whileInView="visible" 
                    size="h2" top="0.5rem">
                        What <BlueText>I can do</BlueText>
                    </Heading>
                    <ParaText top="2rem" bottom="1.5rem">
                        AS a Developer I have a wide range of experience in 
                        <b> front-end development</b>. I am proficient in <b>React, JavaScript, MongoDB, HTML and CSS</b>.
                        My strong experience in building responsive and dynamic user interfaces using React.
                    </ParaText>
                    <ParaText top="1rem" bottom="1.5rem">
                    I have also a wide range of experience in <b>Flutter development</b> with a proven track record of 
                    creating high-quality mobile applications for Android platforms. 
                    Proficient in Dart programming language and well-versed in the Flutter framework. 
                    Strong problem-solving skills and a keen eye for UI/UX design. Adept at collaborating with cross-functional teams to deliver projects on time and within scope. 
                    Continuously learning and staying updated with the latest Flutter developments and best practices.
                    </ParaText>
                </motion.div>

            </FlexContainer>

        </PaddingContainer>
    )
}

export default MySkills