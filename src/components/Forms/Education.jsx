export default function Education({ education, addEducation, deleteEducation, updateEducation }) {
  return (
    <>
      <div className='form-container' id='education-form-container'>
        <h2>Education</h2>
        {education.map((data, index) => {
          return (
            <li key={data.id}>
              <form onSubmit={(e) => updateEducation(e, data.id)} className='form'>
              <div id='education-header'>
                <h3>Education # {index + 1}</h3>
                <div id='button-container'>
                  <button type='submit' className='update-btn'><i className='fa-solid fa-floppy-disk'></i></button>
                  <button onClick={() => deleteEducation(data.id)} type='button' className='delete-btn'><i className='fa-solid fa-trash-can'></i></button>
                </div>
              </div>
                <input type='text' name='degree' defaultValue={data.degree} required />
                <input type='text' name='school' defaultValue={data.school} required/>
                <input type='text' name='school-location' defaultValue={data.location} required/>
                <input type='text' name='start-date' defaultValue={data.startDate} required/>
                <input type='text' name='end-date' defaultValue={data.gradDate} required/>
              </form>
            </li>
          );
        })}
        <form onSubmit={addEducation} className='form'>
          <h3>Add Experience</h3>
          <input type='text' name='degree' placeholder='Degree/Diploma' required />
          <input type='text' name='school' placeholder='University/School' required/>
          <input type='text' name='school-location' placeholder='Location' required/>
          <input type='text' name='start-date' placeholder='Start Date' required/>
          <input type='text' name='end-date' placeholder='Graduation Date' required/>
          <button type='submit' className='add-btn custom'>+ Add</button>
        </form>
      </div>
    </>
  );
}