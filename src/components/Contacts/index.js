import React from 'react'
import List from './List'
import Form from "./Form";
import {useState,useEffect} from 'react'
import "./styless.css";

function Contacts() {

const [contacts, setContacts] = useState([
          {
                    fullName: "Leanne Graham",
                    phoneNumber: "929983874",
          },
          {
                    fullName: "Ervin Howell",
                    phoneNumber: "905667771",
          },
          {
                    fullName: "Clementine Bauch",
                    phoneNumber: "595904157",
          },
]);

useEffect(() => {
  console.log(contacts);
}, 
[contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;
