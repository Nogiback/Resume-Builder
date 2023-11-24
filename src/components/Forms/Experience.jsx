export default function Experience({ experience, addExperience, deleteExperience, updateExperience, changeSkills }) {
  return (
    <>
      <div className='form-container' id='experience-form-container'>
        <h2>Work Experience</h2>
        {experience.map((data, index) => {
          return (
            <li key={data.id}>
              <form onSubmit={(e) => updateExperience(e, data.id)} className='form'>
              <div id='experience-header'>
                <h3>Work Experience # {index + 1}</h3>
                <div id='button-container'>
                  <button type='submit' className='update-btn'><i className='fa-solid fa-floppy-disk'></i></button>
                  <button onClick={() => deleteExperience(data.id)} type='button' className='delete-btn'><i className='fa-solid fa-trash-can'></i></button>
                </div>
              </div>
                <input type='text' name='company' defaultValue={data.company} required />
                <input type='text' name='position' defaultValue={data.position} required/>
                <input type='text' name='company-location' defaultValue={data.location} required/>
                <input type='text' name='start-date' defaultValue={data.startDate} required/>
                <input type='text' name='end-date' defaultValue={data.endDate} required/>
                <textarea type='text' name='description' defaultValue={data.desc} maxLength={750} required></textarea>
              </form>
            </li>
          );
        })}
        <form onSubmit={addExperience} className='form' id='experience-form'>
          <h3>Add Experience</h3>
          <input type='text' name='company' placeholder='Company' required />
          <input type='text' name='position' placeholder='Position' required/>
          <input type='text' name='company-location' placeholder='Location' required/>
          <input type='text' name='start-date' placeholder='Start Date' required/>
          <input type='text' name='end-date' placeholder='End Date' required/>
          <textarea type='text' name='description' placeholder='Description' maxLength={800} required></textarea>
          <button type='submit' className='add-btn custom' >+ Add</button>
        </form>
        <form className='form' id='skills-form-container'>
        <h2>Skills</h2>
          <textarea onChange={(e) => changeSkills(e.target.value)} type='text' name='interests' placeholder='HTML, CSS, Javascript, React, etc...' maxLength={500} required></textarea>
        </form>
      </div>
    </>
  );
}