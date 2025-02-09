import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    resumeAI: {
      description: "A web application for Jobseekers and Recruiters that uses AI to help users Analyze resumes tailored to their skills and experience. The app provides suggestions, percentage match etc.",
      github: "https://github.com/mukulaggy/ResumeAI",
      website: "https://resumeai-nine.vercel.app/",
    },
    QuizGenerator: {
      description: "An AI-powered quiz generator that creates quizzes based on user-provided topics or documents. It supports multiple question types and exports quizzes in various formats for educational or training purposes.",
      github: "https://github.com/mukulaggy/QuizGenerator",
      website: "https://quiz-generator-blond.vercel.app",
    },
    HMS_User: {
      description: "The system allows admins to manage doctors, admins, and appointments. Patients can book appointments, and doctors can manage their schedules.",
      github: "https://github.com/mukulaggy/MERN_Hospital_Management_System",
      website: "https://mern-hospital-management-system.vercel.app/",
    },
    HMS_Admin: {
      description: "The system allows admins to manage doctors, admins, and appointments. Patients can book appointments, and doctors can manage their schedules.",
      github: "https://github.com/mukulaggy/MERN_Hospital_Management_System",
      website: "https://mern-hospital-management-system-zio6.vercel.app/login",
    },
    YouTube:{
      description: "This project is a YouTube clone built using React and Redux. The application mimics some of the core functionalities of YouTube, including video search, video recommendations, and user interaction features",
      github: "https://github.com/mukulaggy/youtubeClone",
      website: "https://youtube-clone-eosin-phi.vercel.app/",

    }
  };

  // Check if GitHub link is empty
  const showGithubButton = desc[projectName].github !== "";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt={`${projectName} display`} />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{desc[projectName].description}</p> {/* Display the project description */}
        <br />

        {/* Conditionally render GitHub button */}
        {showGithubButton && (
          <a href={desc[projectName].github} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}

        {/* Demo button */}
        <a href={desc[projectName].website} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;