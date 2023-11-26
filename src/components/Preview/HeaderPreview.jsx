export default function HeaderPreview({ personalInfo }) {
  return (
    <>  
      <div className='resume-container' id='header-preview'>
        <h1 className='custom'>{personalInfo.firstName} {personalInfo.lastName}</h1>
        <h2>{personalInfo.currentPosition}</h2>
        <p>{personalInfo.bio}</p>
      </div>
      <div className='resume-container' id='header-sidebar-preview'>
        <h3 className='custom'>C O N T A C T</h3>
        <p><i className="fa-solid fa-location-dot"></i> {personalInfo.location}</p>
        <p><i className="fa-solid fa-phone"></i> {personalInfo.phoneNumber}</p>
        <p><i className="fa-solid fa-envelope"></i> {personalInfo.email}</p>
        <p><i className="fa-solid fa-globe"></i> {personalInfo.website}</p>
      </div>
    </>
  );
}