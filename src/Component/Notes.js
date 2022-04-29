import React from 'react'
import NoteItem from './NoteItem';
import { useContext } from 'react';
import NoteContext from '../Context/noteContext';

const Notes = () => {
    const notes = useContext(NoteContext)
    const { state ,setstate } = notes;
  return (
      <>
      <h2>Your Notes</h2>
    <div className='row my-3'>
        {
            state.map((ele,i) =><NoteItem key={i} note={ele} />)
        }
        
    </div>
        </>
  )
}

export default Notes