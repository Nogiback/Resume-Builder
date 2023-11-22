export default function Education() {
  return (
    <>
      <div className='form-container' id='education-form-container'>
        <h2>Education</h2>
        {/* Need to list <li> other education entries here from array*/}
        <form className='form' id='education-form'>
          <input type='text' name='degree' placeholder='Degree/Diploma' required />
          <input type='text' name='school' placeholder='University/School' required/>
          <input type='text' name='school-location' placeholder='Location' required/>
          <input type='text' name='start-date' placeholder='Start Date' required/>
          <input type='text' name='end-date' placeholder='Graduation Date' required/>
        </form>
        <button id='add-education-btn'>+ Add</button>
      </div>
    </>
  );
}