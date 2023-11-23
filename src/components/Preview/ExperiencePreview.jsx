export default function ExperiencePreview({ experience }) {
  return (
    <>
      <div className='resume-container' id='experience-preview'>
        <h3>E X P E R I E N C E</h3>
        {experience.map((data) => {
          return (
            <li key={data.id} className='experience-entry'>
              <h4 id='company-label'><i className="fa-solid fa-briefcase"></i> {data.company} &nbsp;&nbsp; <i className="fa-solid fa-location-dot"></i> {data.location}</h4>
              <h4 id='position-label'>{data.position}</h4>
              <h4 id='exp-date-label'>{data.startDate} - {data.endDate}</h4>
              <p id='desc-text'>{data.desc}</p>
            </li>
          );
        })}
      </div>
    </>
  );
}