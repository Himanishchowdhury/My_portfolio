import {FaReact, FaNode, FaCss3Alt,FaHtml5} from 'react-icons/fa';
import {SiJavascript, SiFlutter} from 'react-icons/si';
import Project1 from '../assets/pro1.png';
import Project2 from '../assets/pro2.png';

export const Skills =[
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'Flutter',
        icon: <SiFlutter />
    },
    {
        id: 2,
        tech: 'Node JS',
        icon: <FaNode />
    },
    
    {
        id: 3,
        tech: 'JavaScript',
        icon: <SiJavascript />
    },
    {
        id: 4,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 5,
        tech: 'HTML',
        icon: <FaHtml5 />
    },
   
];


export const projectDetails =[
    {
        id: 0,
        project_name:"Food Delivery App",
        project_desc:"Developed a high-performance app using React Native, JavaScript, C++, and Firebase.In this app users can log in the app by email and password. Then users access the home page to explore restaurants and food.",
        tech_stack: ['React Native', 'JavaScript','Firebase'],
        project_img: Project1,
        project_url: 'https://github.com/Bama1030/Delivery_App_using_react_native-',
        reverse: false,
    },
    {
        id: 1,
        project_name:"OCR Mobile App",
        project_desc:"Engineered a cutting-edge app leveraging Flutter, Dart, C++, and HTML, resulting in a 25% decrease in bug reports and a 15% improvement in app responsiveness, enhancing user satisfaction.",
        tech_stack: ['Flutter', 'Dart','Firebase'],
        project_img: Project2,
        project_url: 'https://github.com/Bama1030/OCR-Mobile-App',
        reverse: true,
    }
];

export const navLinks =[
    {
        id: 0,
        name: 'Home',
        href: 'Home',
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills',
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects',
    },
    {
        id: 3,
        name: 'Contact Me',
        href: 'Contact',
    }
]