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

  // const [education, setEducation] = useState([]);
  // const [experience, setExperience] = useState([]);
  // const [skills, setSkills] = useState('');

  return (
    <>
      <div className='content'>
        <section className='forms'>
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
          <Education />
          <Experience />
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
          /> 
        </section>
      </div>
    </>
  );
}