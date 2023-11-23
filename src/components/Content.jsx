import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  return (
    <>
      <div className='content'>
        <section className='forms-section'>
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