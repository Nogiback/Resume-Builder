export default function Education({ education, addEducation, deleteEducation, updateEducation }) {
  return (
    <>
      <div className='form-container' id='education-form-container'>
        <h2>Education</h2>
        {education.map((data, index) => {
          return (
            <li key={data.id}>
              <form className='form'>
              <div id='education-header'>
                <h3>Education # {index + 1}</h3>
                <div id='button-container'>
                  <button onClick={() => deleteEducation(data.id)} type='button' className='delete-btn'><i className='fa-solid fa-trash-can'></i></button>
                </div>
              </div>
                <input onChange={(e) => updateEducation(e, data.id)} type='text' name='degree' defaultValue={data.degree} required />
                <input onChange={(e) => updateEducation(e, data.id)} type='text' name='school' defaultValue={data.school} required/>
                <input onChange={(e) => updateEducation(e, data.id)} type='text' name='eduLocation' defaultValue={data.eduLocation} required/>
                <input onChange={(e) => updateEducation(e, data.id)} type='text' name='eduStartDate' defaultValue={data.eduStartDate} required/>
                <input onChange={(e) => updateEducation(e, data.id)} type='text' name='gradDate' defaultValue={data.gradDate} required/>
              </form>
            </li>
          );
        })}
        <form onSubmit={addEducation} className='form' id='education-form'>
          <h3>Add Education</h3>
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