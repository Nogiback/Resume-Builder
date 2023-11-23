import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Buttons from './Forms/Buttons';
import PersonalInfo from './Forms/PersonalInfo';
import Education from './Forms/Education';
import Experience from './Forms/Experience';
import Resume from './Preview/Resume';

export default function Content() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState('');


  function addEducation(e) {
    e.preventDefault()
    if (education.length === 3) return;
    const id = uuidv4();
    const degree = e.target[0].value;
    const school = e.target[1].value;
    const location = e.target[2].value;
    const startDate = e.target[3].value;
    const gradDate = e.target[4].value;
    const newEducation = { id, degree, school, location, startDate, gradDate };
    setEducation([...education, newEducation]);
    e.target.reset();
  }

  function deleteEducation(id) {
    setEducation((currentEducation) => {
      return currentEducation.filter((data) => data.id !== id);
    });
  }

  function updateEducation(e, id) {
    e.preventDefault();
    const degree = e.target[0].value;
    const school = e.target[1].value;
    const location = e.target[2].value;
    const startDate = e.target[3].value;
    const gradDate = e.target[4].value;
    const updatedEducation = { degree, school, location, startDate, gradDate };

    setEducation(
      education.map((data) => {
        if (data.id === id) {
          return {...data, ...updatedEducation};
        } else {
          return data;
        }
      })
    );
  }

  function addExperience(e) {
    e.preventDefault()
    if (experience.length === 5) return;
    const id = uuidv4();
    const company = e.target[0].value;
    const position = e.target[1].value;
    const location = e.target[2].value;
    const startDate = e.target[3].value;
    const endDate = e.target[4].value;
    const desc = e.target[5].value;
    const newExperience = { id, company, position, location, startDate, endDate, desc };
    setExperience([...experience, newExperience]);
    e.target.reset();
  }

  function deleteExperience(id) {
    setExperience((currentExperience) => {
      return currentExperience.filter((data) => data.id !== id);
    });
  }

  function updateExperience(e, id) {
    e.preventDefault();
    const company = e.target[2].value;
    const position = e.target[3].value;
    const location = e.target[4].value;
    const startDate = e.target[5].value;
    const endDate = e.target[6].value;
    const desc = e.target[7].value;
    const updatedExperience= { company, position, location, startDate, endDate, desc };

    setExperience(
      experience.map((data) => {
        if (data.id === id) {
          return {...data, ...updatedExperience};
        } else {
          return data;
        }
      })
    );
  }

  function resetForms() {
    setFirstName('');
    setLastName('');
    setBio('');
    setCurrentPosition('');
    setLocation('');
    setEmail('');
    setPhoneNumber('');
    setWebsite('');
    setInterests('');
    setSkills('');
    setEducation([]);
    setExperience([]);
  }

  function loadExample() {
    resetForms();
    setFirstName('John');
    setLastName('Doe');
    setCurrentPosition('Tech Lead');
    setEmail('johndoe@email.com');
    setLocation('Toronto, ON');
    setPhoneNumber('123-456-7890');
    setWebsite('www.doedeveloper.com');
    setBio('I am a full stack web developer with a passion for clean and minimal designs.')
    const exampleExp1 = {
      id: uuidv4(),
      company: 'Spotify',
      position: 'Tech Lead',
      location: 'Remote',
      startDate: 'April 2022',
      endDate: 'Present',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    };
    const exampleExp2 = {
      id: uuidv4(),
      company: 'Facebook',
      position: 'Sr. Web Developer',
      location: 'Toronto, ON',
      startDate: 'August 2019',
      endDate: 'April 2022',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    };
    const exampleExp3 = {
      id: uuidv4(),
      company: 'Start Up Company',
      position: 'Jr. Web Developer',
      location: 'Toronto, ON',
      startDate: 'August 2018',
      endDate: 'August 2019',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    };
    const exampleEdu1 = {
      id: uuidv4(),
      degree: 'B.S. Computer Science',
      school: 'University of Toronto',
      location: 'Toronto, ON',
      startDate: 'September 2012',
      gradDate: 'May 2016',
    };
    const exampleEdu2 = {
      id: uuidv4(),
      degree: 'M.S. Computer Science',
      school: 'Harvard University',
      location: 'Boston, USA',
      startDate: 'September 2016',
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
            changeFirstName={setFirstName}
            changeLastName={setLastName}
            changePhoneNumber={setPhoneNumber}
            changeEmail={setEmail}
            changeLocation={setLocation}
            changeCurrentPosition={setCurrentPosition}
            changeWebsite={setWebsite}
            changeBio={setBio}
            changeInterests={setInterests}
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
            changeSkills={setSkills}
          />
        </section>
        <section className='resume-preview'>
          <Resume
            firstName={firstName}
            lastName={lastName}
            phoneNumber={phoneNumber}
            email={email}
            location={location}
            currentPosition={currentPosition}
            website={website}
            bio={bio}
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