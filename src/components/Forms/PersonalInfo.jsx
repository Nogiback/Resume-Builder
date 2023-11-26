export default function PersonalInfo({ personalInfo, updatePersonalInfo, interests, updateInterests }) {
  return (
    <>
      <div className='form-container' id='personal-info-form-container'>
        <h2>Personal Info</h2>
        <form className='form' id='personal-info-form'>
          <div className='personal-info-name'>
            <input onChange={(e) => updatePersonalInfo(e)} defaultValue={personalInfo.firstName} type='text' name='firstName' placeholder='First Name' required />
            <input onChange={(e) => updatePersonalInfo(e)} defaultValue={personalInfo.lastName} type='text' name='lastName' placeholder='Last Name' required />
          </div>
          <div className='personal-info-contact'>
            <input onChange={(e) => updatePersonalInfo(e)} defaultValue={personalInfo.phoneNumber} type='tel' name='phoneNumber' placeholder='Phone Number' required />
            <input onChange={(e) => updatePersonalInfo(e)} defaultValue={personalInfo.email} type='email' name='email' placeholder='Email' required />
          </div>
          <input onChange={(e) => updatePersonalInfo(e)} defaultValue={personalInfo.location} type='text' name='location' placeholder='Location' required />
          <input onChange={(e) => updatePersonalInfo(e)} defaultValue={personalInfo.currentPosition} type='text' name='currentPosition' placeholder='Current Position' required />
          <input onChange={(e) => updatePersonalInfo(e)} defaultValue={personalInfo.website} type='text' name='website' placeholder='Website' required/>
          <textarea onChange={(e) => updatePersonalInfo(e)} defaultValue={personalInfo.bio} type='text' name='bio' placeholder='Write a short bio...' maxLength={250} required></textarea>
          <h2>Interests</h2>
          <textarea onChange={(e) => updateInterests(e.target.value)} defaultValue={interests} type='text' name='interests' placeholder='Hiking, basketball, movies, etc...' maxLength={500} required></textarea>
        </form>
      </div>
    </>
  );
}