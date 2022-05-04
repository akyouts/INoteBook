import React, {useState,useContext} from 'react'
import NoteContext from '../Context/noteContext';

const AddNotes = () => {
    const x = useContext(NoteContext);

   const [note, setnote] = useState({title:"",
description:""});
   const handleChange = (e)=>{
       setnote({...note, [e.target.name]:e.target.value})
   }

   const handleSubmit = ()=>{
      
      x.Addnote(note);
   }

  return (
      <>
    <h2>Add Notes</h2>
      <div className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={note.title} name="title" aria-describedby="emailHelp" 
          onChange={handleChange}/>
         
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" className="form-control" id="desc"  name='description' value={note.description} onChange={handleChange}/>
        </div>
        
        <button onClick={handleSubmit}  className="btn btn-primary" >Submit</button>
        </div>
      </div>
      </>
  )
}

export default AddNotes