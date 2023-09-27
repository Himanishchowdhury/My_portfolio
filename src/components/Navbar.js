import React, {useState, useEffect} from 'react';
import { FlexContainer,PaddingContainer,Container, BlueText } from '../styles/Global.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';
import { NavbarContainer, Logo, MenuIcon, MenuItem1 } from '../styles/Navbar.styled';
import NavMenu from './layouts/NavMenu';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../utils/Data';



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() =>{
        const onScroll =()=>{
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[])

  return (
    <NavbarContainer bgColor={ sticky ? theme.colors.primary_light : 'transparent'}>
        <PaddingContainer
            top="1.2rem"
            bottom="0.8rem"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <Container>
                <FlexContainer justify="space-between" responsiveFlex>

                    <Logo style={{fontSize:"35px"}}>
                        <BlueText>Portfolio.</BlueText>
                    </Logo>

                    <FlexContainer
                        gap="40px" 
                        direction="row"
                    >
                    {navLinks.map((link) => (
                    <MenuItem1
                    as={motion.a}
                    whileHover={{scale: 1.3}} 
                    key={link.id}
                    href={`#${link.href}`}
                    onClick={()=> setOpenMenu(false)}
                    >
                        {link.name}
                    </MenuItem1>
                    ))}
                    </FlexContainer>

                    <MenuIcon
                    as={motion.a}
                    whileHover={{scale: 1.2}}
                    onClick={()=>{ setOpenMenu(true) }}>
                        <GiHamburgerMenu />
                    </MenuIcon>

                </FlexContainer>
            </Container>
            <AnimatePresence>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
            </AnimatePresence>
            
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar
