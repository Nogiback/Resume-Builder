import HeaderPreview from './HeaderPreview';
import ExperiencePreview from './ExperiencePreview';
import SidebarPreview from './SidebarPreview';

export default function Resume({firstName, lastName, phoneNumber, email, location, currentPosition, website, bio, interests, education, experience, skills}) {
  return(
    <>
      <div className='resume-page'>
          <HeaderPreview
            firstName={firstName}
            lastName={lastName}
            phoneNumber={phoneNumber}
            email={email}
            location={location}
            currentPosition={currentPosition}
            website={website}
            bio={bio}  
          />
          <ExperiencePreview experience={experience}/>
          <SidebarPreview
            skills={skills}
            education={education}
            interests={interests}
          />
      </div>
    </>
  );
}