export default function PersonalInfo() {
  return (
    <>
      <div className='personal-info-form-container'>
        <h2>Personal Info</h2>
        <form className='personal-info-form'>
          <div className='personal-info-name'>
            <input type='text' name='first-name' placeholder='First Name' required />
            <input type='text' name='last-name' placeholder='Last Name' required />
          </div>
          <div className='personal-info-contact'>
            <input type='tel' name='phone-number' placeholder='Phone Number' required />
            <input type='email' name='email' placeholder='Email' required />
          </div>
          <input type='text' name='location' placeholder='Location' required />
          <input type='text' name='website' placeholder='Website' required/>
          <textarea type='text' name='bio' placeholder='Tell us about yourself...' maxLength={500} required></textarea>
        </form>
      </div>
    </>
  );
}