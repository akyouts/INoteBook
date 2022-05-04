import NoteContext from "./noteContext";
import { useState, useEffect } from "react";
import axios from "axios";

const NoteState = (props)=>{

  const [state, setstate] = useState([]);

 async function  getNotes(){


  /* const response  =*/  await axios.get('http://localhost:8000/api/note/getallnotes', {
  headers: {
    'content-type': 'application/json',
    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjY3Yzk2MzBjYTVhNDFhNjVmNmU2MiIsImlhdCI6MTY1MTY2OTk5OX0.rHhBDKYTpIfg4eD8YDdXps9Gxla2kuxLY6PiwvhRGlA'
  }
}).then((res)=>{
   return res.data
   
});
  // return response.data

  // // Default options are marked with *
  // const response = fetch( 'http://localhost:8000/api/note/getallnotes', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjY3Yzk2MzBjYTVhNDFhNjVmNmU2MiIsImlhdCI6MTY1MTY2OTk5OX0.rHhBDKYTpIfg4eD8YDdXps9Gxla2kuxLY6PiwvhRGlA'
      
  //   },

  // })
  //  const json = await response.json();
  //  return json
}

const extra = async ()=>{
  console.log( await getNotes());
}

  useEffect(() =>{
    
    extra();
    
    
    
  }, []);
   

       // ADD note
       const Addnote = (note) =>{
          setstate(state.concat(note));
       }

       // Delete note
       const deleteNOte = (note) =>{
          const newData = state.filter((value)=>{
              return value._id !== note
          })

          setstate(newData)
     }
     
     return (
     <NoteContext.Provider value={{state ,Addnote ,deleteNOte }}>
           {props.children}
     </NoteContext.Provider>
     )

}

export default NoteState