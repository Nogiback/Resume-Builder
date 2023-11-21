import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PersonalInfo from './Forms/PersonalInfo';
//import Education from './Forms/Education';
//import Experience from './Forms/Experience';
//import Resume from './Preview/Resume';

export default function Content() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [bio, setBio] = useState('');
  // const [location, setLocation] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [website, setWebsite] = useState('');

  return (
    <>
      <div className='content'>
        <section className='forms'>
          <PersonalInfo />
          {/* <Education />
          <Experience /> */}
        </section>
        <section className='resume-preview'>
          {/* <Resume /> */}
        </section>
      </div>
    </>
  );
}