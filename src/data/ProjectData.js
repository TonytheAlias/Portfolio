import OtusFinanceImg from '../images/OtusFinance.png';
import OtusFinanceIcon from '../images/OtusFinance-icon.png';
import RecruitmentBuddyImg from "../images/RecruitmentBuddy.png";
import RecruitmentBuddyIcon from "../images/RecruitmentBuddy-icon.png";
import CodeTrackerImg from "../images/CodeTracker.png";
import CodeTrackerIcon from "../images/CodeTracker-Icon.png";
import OtakuSearchImg from "../images/ComingSoonBanner.png";
import OtakuSearchIcon from "../images/ComingSoon-icon.png"

const projectData = [
  {
    id: 1,
    title: "Otus Finance",
    description: "A financial tracking app that helps users monitor spending, set monthly budgets based on their income and expenses, and visualize their spending patterns through an intuitive overview dashboard",
    technologies: ["C#", ".Net Maui", "Visual Studio", "SQL Lite"],
    image: OtusFinanceImg,
    icon: OtusFinanceIcon,
    githubLink: "https://github.com/TonytheAlias/OtusFinance",
    feature: true
  },
   {
    id: 2,
    title: "Recuritment Buddy",
    description: "A web-based degree program recommender using personality traits and academic interests",
    technologies: ["HTML", "CSS", "JavaScript", "Python","VSCode", "Flask"],
    image: RecruitmentBuddyImg, 
    icon: RecruitmentBuddyIcon,
    githubLink: "https://github.com/TonytheAlias/RecruitmentBuddy",
    feature: true
  },
   {
    id: 3,
    title: "Code Tracker",
    description: "A Chrome extension that monitors coding assessment behavior on platforms like LeetCode and HackerRank, tracking keystrokes, paste events, tab switches, and idle time with real-time analytics and multi-format data export capabilities.",
    technologies: ["JavaScript", "HTML", "CSS", "VSCode","Json","Manifest V3", "Chrome Stroage API"],
    image: CodeTrackerImg,
    icon: CodeTrackerIcon,
    githubLink: "https://github.com/TonytheAlias/CodeTracker",
    feature: true
  },
   {
    id: 4,
    title: "Otaku Search",
    description: "A search engine that allow the user to search for their favorite anime, manhwa, and manga",
    technologies: ["HTML", "CSS", "JavaScript", "Python","React", 'Postgre SQL', "Node.js"],
    image: OtakuSearchImg,
    icon: OtakuSearchIcon,
    githubLink: "https://github.com/TonytheAlias/OtakuSearch",
    feature: true
  }, 
  
]
export default projectData