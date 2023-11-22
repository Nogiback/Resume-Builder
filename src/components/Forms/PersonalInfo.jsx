export default function PersonalInfo({ changeFirstName, changeLastName, changePhoneNumber, changeEmail, changeLocation, changeCurrentPosition, changeWebsite, changeBio, changeInterests }) {
  return (
    <>
      <div className='form-container' id='personal-info-form-container'>
        <h2>Personal Info</h2>
        <form className='form' id='personal-info-form'>
          <div className='personal-info-name'>
            <input onChange={(e) => changeFirstName(e.target.value)} type='text' name='first-name' placeholder='First Name' required />
            <input onChange={(e) => changeLastName(e.target.value)} type='text' name='last-name' placeholder='Last Name' required />
          </div>
          <div className='personal-info-contact'>
            <input onChange={(e) => changePhoneNumber(e.target.value)} type='tel' name='phone-number' placeholder='Phone Number' required />
            <input onChange={(e) => changeEmail(e.target.value)} type='email' name='email' placeholder='Email' required />
          </div>
          <input onChange={(e) => changeLocation(e.target.value)} type='text' name='location' placeholder='Location' required />
          <input onChange={(e) => changeCurrentPosition(e.target.value)} type='text' name='current-position' placeholder='Current Position' required />
          <input onChange={(e) => changeWebsite(e.target.value)} type='text' name='website' placeholder='Website' required/>
          <textarea onChange={(e) => changeBio(e.target.value)} type='text' name='bio' placeholder='Tell us about yourself...' maxLength={500} required></textarea>
          <h2>Interests</h2>
          <textarea onChange={(e) => changeInterests(e.target.value)} type='text' name='interests' placeholder='Hiking, basketball, movies, etc...' maxLength={500} required></textarea>
        </form>
      </div>
    </>
  );
}