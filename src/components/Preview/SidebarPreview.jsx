export default function SidebarPreview({skills, education, interests}) {
  return (
    <>
      <div className='resume-container' id='sidebar-preview'>
        <div id='skills-container'>
          <h3>S K I L L S</h3>
          <p>{skills}</p>
        </div>
        <div id='education-container'>
        <h3>E D U C A T I O N</h3>
        {education.map((data) => {
          return (
            <li key={data.id} className='education-entry'>
              <h4 id='school-label'>{data.school}</h4>
              <h5 id='degree-label'>{data.degree}</h5>
              <h5 id='edu-date-label'>{data.startDate} - {data.gradDate}</h5>
              <h5 id='location-label'>{data.location}</h5>
            </li>
          );
        })}
        </div>
        <div id='interests-container'>
          <h3>I N T E R E S T S</h3>
          <p>{interests}</p>
        </div>
      </div>
    </>
  );
}