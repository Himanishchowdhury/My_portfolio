import {FaReact, FaNode, FaCss3Alt,FaHtml5} from 'react-icons/fa';
import {SiJavascript, SiFlutter} from 'react-icons/si';
import Project1 from '../assets/pro1.png';
import Project2 from '../assets/pro2.png';
import Project3 from '../assets/pro3.png';
import Project4 from '../assets/pro4.png';

export const Skills =[
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },
    // {
    //     id: 1,
    //     tech: 'Node JS',
    //     icon: <FaNode />
    // },
    {
        id: 1,
        tech: 'JavaScript',
        icon: <SiJavascript />
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 3,
        tech: 'HTML',
        icon: <FaHtml5 />
    },
    {
        id: 4,
        tech: 'Data Science',
        //icon: < />
    },
    {
        id: 5,
        tech: 'Machine Learning',
        //icon: < />
    },

   
];


export const projectDetails =[
    {
        id: 0,
        project_name:"Weather Website",
        project_desc:"Developed a high-performance website using HTML, CSS, JavaScript.In this website users can access the home page to explore location, temperature, humidity and wind speed.",
        tech_stack: ['HTML', 'CSS', 'JavaScript'],
        project_img: Project1,
        project_url: 'https://github.com/Himanishchowdhury/Weather_website-',
        reverse: false,
    },
    {
        id: 1,
        project_name:"My portfolio",
        project_desc:"I Developed my portfolio website using HTML, CSS, JavaScript and React JS. In this website any one can visit my profile , project and skills.",
        tech_stack: ['HTML', 'CSS', 'JavaScript', 'React'],
        project_img: Project2,
        project_url: 'https://github.com/Himanishchowdhury/My_portfolio-',
        reverse: false,
    },
    {
        id: 2,
        project_name:"Retinal Disease Classification and Analysis Using Machine Learning",
        project_desc:"The concept of a classification system of automatic cataract detection based on retinal fundus images has been proposed in previous research work which consists of fundus image preprocessing, feature extraction and the building of classifier.Research in the field of medical image analysis has shown promise to bring automated diagnosis in the healthcare industry. Especially, areas such as ophthalmology, i.e. eye disease, can benefit immensely from advances in the field of medical image analysis research. This is because diagnosis of many eye diseases rely on visually inspecting retinal scans by domain experts. It is a tedious and time consuming process and can largely be automated using modern machine learning (ML) and artificial intelligence(AI) algorithms. While ML/AI may not replace opthalmologists overnight, this technology can (a)make their jobs easier by assisting them to diagnose patients (b) can help deliver eyecare in places (e.g. developing countries/remote locations) where there is a shortage of opthalmologists.",
        tech_stack: ['Python', 'Data Science','Machine Learning', 'Medical Dataset'],
        project_img: Project3,
        project_url: 'https://github.com/Himanishchowdhury/Retinal-Disease-Classification-and-Analysis-Using-Machine-Learning',
        reverse: true,
    },
    {
        id: 3,
        project_name:"Human Colorectal Histological  Image Classification Using Vision Transformers (ViT)",
        project_desc:"In this project we used a novel method employing Vision Transformers (ViTs) to classify colorectal cancer histology images. Its ranks among the top cancers globally.The study utilizes deep learning techniques, CNN model and multiple ViT models, to achieve high accuracy in classifying histology images. And get the best model as ScalableVit.This research significantly contributes to the field of medical image analysis.",
        tech_stack: ['Python', 'Data Science','Machine Learning', 'CNN', 'ViT', 'Medical Dataset'],
        project_img: Project4,
        project_url: 'https://github.com/Himanishchowdhury/Human-Colorectal-Histological-Image-Classification-Using-Vision-Transformers-ViT-',
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