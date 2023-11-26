import HeaderPreview from './HeaderPreview';
import ExperiencePreview from './ExperiencePreview';
import SidebarPreview from './SidebarPreview';

export default function Resume({ personalInfo, interests, education, experience, skills}) {
  return(
    <>
      <div className='resume-page'>
          <HeaderPreview personalInfo={personalInfo}/>
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