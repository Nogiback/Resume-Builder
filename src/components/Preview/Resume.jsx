import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

export default function Resume() {
  return(
    <>
      <div className='resume-page'>
      <PersonalPreview />
      <EducationPreview />
      <ExperiencePreview />
      </div>
    </>
  );
}