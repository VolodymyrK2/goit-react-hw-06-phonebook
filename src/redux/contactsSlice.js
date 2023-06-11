import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./initialState";
import { nanoid } from 'nanoid'
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {value:contactsInitialState},
    reducers: {
        addContact: {
            reducer(state, action) {
                state.value.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number
                    }
                }
            }
        },
        deleteContact(state, action) {
            state.value= state.value.filter(contact => contact.id !== action.payload)
        },
    }
})
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;