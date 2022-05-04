import React from 'react'
import AddNotes from './AddNotes'
import Notes from './Notes'



const Home = () => {

  return (
    <div className='container my-3'>
      <AddNotes/>
      <Notes></Notes>
    </div>
  )
}

export default Home