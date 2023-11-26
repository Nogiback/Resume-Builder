import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Buttons from './Forms/Buttons';
import PersonalInfo from './Forms/PersonalInfo';
import Education from './Forms/Education';
import Experience from './Forms/Experience';
import Resume from './Preview/Resume';

export default function Content() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    currentPosition: '',
    location: '',
    email: '',
    phoneNumber: '',
    website: '',
  });
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState('');

  function handlePersonalChange(e) {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  }

  function addEducation(e) {
    e.preventDefault()
    if (education.length === 3) return;
    const id = uuidv4();
    const degree = e.target[0].value;
    const school = e.target[1].value;
    const eduLocation = e.target[2].value;
    const eduStartDate = e.target[3].value;
    const gradDate = e.target[4].value;
    const newEducation = { id, degree, school, eduLocation, eduStartDate, gradDate };
    setEducation([...education, newEducation]);
    e.target.reset();
  }

  function deleteEducation(id) {
    setEducation((currentEducation) => {
      return currentEducation.filter((data) => data.id !== id);
    });
  }

  function updateEducation(e, id) {
    const { name, value } = e.target;
    setEducation(education.map(edu => {
      if (edu.id === id) {
        return { ...edu, [name]: value};
      } else {
        return edu;
      }
    }));
  }

  function addExperience(e) {
    e.preventDefault()
    if (experience.length === 5) return;
    const id = uuidv4();
    const company = e.target[0].value;
    const position = e.target[1].value;
    const expLocation = e.target[2].value;
    const startDate = e.target[3].value;
    const endDate = e.target[4].value;
    const desc = e.target[5].value;
    const newExperience = { id, company, position, expLocation, startDate, endDate, desc };
    setExperience([...experience, newExperience]);
    e.target.reset();
  }

  function deleteExperience(id) {
    setExperience((currentExperience) => {
      return currentExperience.filter((data) => data.id !== id);
    });
  }

  function updateExperience(e, id) {
    const { name, value } = e.target;
    setExperience(experience.map(exp => {
      if (exp.id === id) {
        return { ...exp, [name]: value};
      } else {
        return exp;
      }
    }));
  }

  function resetForms() {
    const personalForm = document.getElementById('personal-info-form');
    personalForm.reset();
    setPersonalInfo({
      firstName: '',
      lastName: '',
      bio: '',
      currentPosition: '',
      location: '',
      email: '',
      phoneNumber: '',
      website: '',
    });
    setInterests('');
    setSkills('');
    setEducation([]);
    setExperience([]);
  }

  function loadExample() {
    resetForms();
    setPersonalInfo({
      firstName: 'John',
      lastName: 'Doe',
      bio: 'I am a full stack web developer with a passion for clean and minimal designs.',
      currentPosition: 'Tech Lead',
      location: 'Toronto, ON',
      email: 'johndoe@gmail.com',
      phoneNumber: '123-456-7890',
      website: 'www.doedeveloper.com',
    });
    const exampleExp1 = {
      id: uuidv4(),
      company: 'Spotify',
      position: 'Tech Lead',
      expLocation: 'Remote',
      startDate: 'April 2022',
      endDate: 'Present',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    };
    const exampleExp2 = {
      id: uuidv4(),
      company: 'Facebook',
      position: 'Sr. Web Developer',
      expLocation: 'Toronto, ON',
      startDate: 'August 2019',
      endDate: 'April 2022',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    };
    const exampleExp3 = {
      id: uuidv4(),
      company: 'Start Up Company',
      position: 'Jr. Web Developer',
      expLocation: 'Toronto, ON',
      startDate: 'August 2018',
      endDate: 'August 2019',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    };
    const exampleEdu1 = {
      id: uuidv4(),
      degree: 'B.S. Computer Science',
      school: 'University of Toronto',
      eduLocation: 'Toronto, ON',
      eduStartDate: 'September 2012',
      gradDate: 'May 2016',
    };
    const exampleEdu2 = {
      id: uuidv4(),
      degree: 'M.S. Computer Science',
      school: 'Harvard University',
      eduLocation: 'Boston, USA',
      eduStartDate: 'September 2016',
      gradDate: 'August 2018',
    };
    setSkills('Javascript, Typescript, HTML, CSS, Sass, PHP, React, Next.js, Gatsby, Tailwind, Git, Github, Vercel, Heroku, Docker, Webpack, Firebase, Figma');
    setInterests('Hiking, Basketball, Reading, Movies, Video Games, Design')
    setEducation([exampleEdu1, exampleEdu2]);
    setExperience([exampleExp1, exampleExp2, exampleExp3]);
  }

  return (
    <>
      <div className='content'>
        <section className='forms-section'>
          <Buttons loadExample={loadExample} resetForms={resetForms}/>
          <PersonalInfo
            personalInfo={personalInfo}
            updatePersonalInfo={handlePersonalChange}
            interests={interests}
            updateInterests={setInterests}
           />
          <Education 
            education={education}
            addEducation={addEducation}
            deleteEducation={deleteEducation}
            updateEducation={updateEducation}
          />
          <Experience 
            experience={experience}
            addExperience={addExperience}
            deleteExperience={deleteExperience}
            updateExperience={updateExperience}
            skills={skills}
            updateSkills={setSkills}
          />
        </section>
        <section className='resume-preview'>
          <Resume
            personalInfo={personalInfo}
            interests={interests}
            education={education}
            experience={experience}
            skills={skills}
          /> 
        </section>
      </div>
    </>
  );
}