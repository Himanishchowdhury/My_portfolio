import React from 'react';
import { PaddingContainer, Button, Heading, FlexContainer, ParaText, IconContainer } from '../../styles/Global.styled';
import { FaGithub } from 'react-icons/fa';
import { TechStackCard, ProjectImageContainer, ProjectImage } from '../../styles/MyProject.styled';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variant';
import { motion } from 'framer-motion';
//import { projectDetails } from '../../utils/Data';

const Project = ({ data }) => {
    return (
        <FlexContainer
        direction={data.reverse ? 'row-reverse' : false} 
        fullwidthchild>
            <motion.div
                variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                        {data.project_name}
                    </Heading>
                    
                    <IconContainer color="blue" size="2rem" >
                        <a color='light-blue' href={data.project_url} target='_blank'>
                            <FaGithub />
                        </a>
                        
                    </IconContainer>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">
                        {data.tech_stack.map((stack) => (
                            <TechStackCard>{stack}</TechStackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainer>
                <ParaText top="1.5rem" bottom="2rem">
                    {data.project_desc}
                </ParaText>
                <Button href={data.project_url} target='_blank' style={{textDecoration: 'none'}}>Visit GitHub</Button>
            </motion.div>
            <div>
                <ProjectImageContainer
                    as={motion.div}
                    variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                    justify={data.reverse ? "flex-start" : "flex-end"}
                >
                    <ProjectImage src={data.project_img} alt={data.project_name} />
                </ProjectImageContainer>
            </div>
        </FlexContainer>
    )
}

export default Project