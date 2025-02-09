import React from 'react';
import ProjectBox from './ProjectBox';
import hospital from "../images/hospital.png"
import HMS_Admin from "../images/HMS_Admin.png"
import quizai from "../images/quizai.png"
import youtube from "../images/youtube.png"
import resumeAi from "../images/resumeAi.png"

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={resumeAi} projectName="resumeAI" />
        <ProjectBox projectPhoto={quizai} projectName="QuizGenerator" />
        <ProjectBox projectPhoto={hospital} projectName="HMS_User" />
        <ProjectBox projectPhoto={HMS_Admin} projectName="HMS_Admin" />
        <ProjectBox projectPhoto={youtube} projectName="YouTube" />
      </div>

    </div>
  )
}

export default Projects