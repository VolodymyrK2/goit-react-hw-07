import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://649361bb428c3d2035d1b639.mockapi.io/api/phonebook";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
   async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
      
        return response.data;
        
    } catch (e) {
     return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
    async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);