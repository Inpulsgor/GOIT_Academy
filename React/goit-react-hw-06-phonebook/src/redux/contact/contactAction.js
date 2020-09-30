import { ADD_CONTACT, DELETE_CONTACT,FILTER_CONTACT } from './contactType';
import { v4 as uuidv4 } from "uuid";
  
const addContact = (name, number) => ({
  type: ADD_CONTACT, 
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    }
  }
})

const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: {
    id, 
  }
})

const filterContact = (filter) => ({
  type: FILTER_CONTACT,
  payload: {
    filter,
  }
})

export default {
   addContact,
   deleteContact,
   filterContact
   };