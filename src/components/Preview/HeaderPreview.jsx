export default function HeaderPreview({firstName, lastName, phoneNumber, email, location, currentPosition, website, bio}) {
  return (
    <>  
      <div className='resume-container' id='header-preview'>
        <h1>{firstName} {lastName}</h1>
        <h2>{currentPosition}</h2>
        <p>{bio}</p>
      </div>
      <div className='resume-container' id='header-sidebar-preview'>
        <h3>C O N T A C T</h3>
        <p><i className="fa-solid fa-location-dot"></i> {location}</p>
        <p><i className="fa-solid fa-phone"></i> {phoneNumber}</p>
        <p><i className="fa-solid fa-envelope"></i> {email}</p>
        <p><i className="fa-solid fa-globe"></i> {website}</p>
      </div>
    </>
  );
}