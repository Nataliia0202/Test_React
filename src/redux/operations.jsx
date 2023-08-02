import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://64ca905f700d50e3c70510c5.mockapi.io';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, thunkApi) => {
    try {
        const events = await axios.get('/events');
        console.log(events.data);
      return events.data;
    } catch (error) {
    
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addNewEvents = createAsyncThunk(
  'events/addNewEvents',
  async ({ name, image, place, time, description, category, level, id }, thunkApi) => {
    try {
      const events = await axios.post('/events', {
        name,
        image,
        place,
        time,
        description,
        category,
        level,
        id,
      });
      return events.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);