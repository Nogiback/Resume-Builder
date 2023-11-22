import HeaderPreview from './HeaderPreview';
import ExperiencePreview from './ExperiencePreview';
import SidebarPreview from './SidebarPreview';

export default function Resume({firstName, lastName, phoneNumber, email, location, currentPosition, website, bio, interests}) {
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
        <div className='resume-container' id='experience-preview'>
          <h3>E X P E R I E N C E</h3>
          <ExperiencePreview />
        </div>
        <div className='resume-container' id='sidebar-preview'>
          <SidebarPreview/>
        </div>
      </div>
    </>
  );
}