import React ,{ useContext } from 'react'
import NoteContext from '../Context/noteContext'





const About = () => {
const a = useContext(NoteContext)

  return (
    
      
    <div>This is About {a.state.name} and he is in class {a.state.class}</div>
    
  )
}

export default About