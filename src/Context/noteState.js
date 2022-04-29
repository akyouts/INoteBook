import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const notesInitila = 
    [
        {
          "_id": "62684c7ddd06ad3eb4f47ac2",
          "title": "test232",
          "userid": "62667c9630ca5a41a65f6e62",
          "description": "test",
          "tag": "test",
          "date": "2022-04-26T19:48:13.423Z",
          "__v": 0
        },
        {
          "_id": "626c0f17295b7668bd0b56c5",
          "title": "testdsfsd",
          "userid": "62667c9630ca5a41a65f6e62",
          "description": "testsdfsd",
          "tag": "testdsfcsd",
          "date": "2022-04-29T16:15:19.899Z",
          "__v": 0
        },
        {
          "_id": "626c0f17295b7668bd0b56c5",
          "title": "testdsfsd",
          "userid": "62667c9630ca5a41a65f6e62",
          "description": "testsdfsd",
          "tag": "testdsfcsd",
          "date": "2022-04-29T16:15:19.899Z",
          "__v": 0
        },
        {
          "_id": "626c0f17295b7668bd0b56c5",
          "title": "testdsfsd",
          "userid": "62667c9630ca5a41a65f6e62",
          "description": "testsdfsd",
          "tag": "testdsfcsd",
          "date": "2022-04-29T16:15:19.899Z",
          "__v": 0
        },
        {
          "_id": "626c0f17295b7668bd0b56c5",
          "title": "testdsfsd",
          "userid": "62667c9630ca5a41a65f6e62",
          "description": "testsdfsd",
          "tag": "testdsfcsd",
          "date": "2022-04-29T16:15:19.899Z",
          "__v": 0
        }
      ]
   
    const [state, setstate] = useState(notesInitila);

    const changeState = ()=>{
        
    }
     
     return (
     <NoteContext.Provider value={{state,changeState}}>
           {props.children}
     </NoteContext.Provider>
     )

}

export default NoteState