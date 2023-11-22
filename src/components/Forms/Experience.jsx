export default function Experience() {
  return (
    <>
      <div className='form-container' id='experience-form-container'>
        <h2>Work Experience</h2>
        {/* Need to list <li> other work entries here from array*/}
        <form className='form' id='experience-form'>
          <input type='text' name='company' placeholder='Company' required />
          <input type='text' name='position' placeholder='Position' required/>
          <input type='text' name='company-location' placeholder='Location' required/>
          <input type='text' name='start-date' placeholder='Start Date' required/>
          <input type='text' name='end-date' placeholder='End Date' required/>
        </form>
        <button id='add-experience-btn'>+ Add</button>
        <form className='form' id='skills-form-container'>
        <h2>Skills</h2>
          <textarea type='text' name='interests' placeholder='HTML, CSS, Javascript, React, etc...' maxLength={500} required></textarea>
        </form>
      </div>
    </>
  );
}