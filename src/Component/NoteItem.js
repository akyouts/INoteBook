import React from 'react'
import { useContext } from 'react';
import NoteContext from '../Context/noteContext';

const NoteItem = (props) => {
    const { deleteNOte } = useContext(NoteContext)
    const {note} = props

    const deleteNote = (e)=>{
          deleteNOte(e.target.name)
    }
    return (
        <div className='col-sm-3'>
    <div className="card my-3" >
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                
                <p className="card-text">{note.description}</p>
                <i onClick={deleteNote} name = {props.uni} className="fa-solid fa-trash-can mx-2" />
                <i className="fa-solid fa-user-pen mx-2 " />
            </div>
            
        </div>
        </div>
        
        )
        }
        
        export default NoteItem
