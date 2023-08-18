import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastSuccessAdd, toastSuccessDelete, toastError } from 'components/Services/toast';

axios.defaults.baseURL = 'https://64ca905f700d50e3c70510c5.mockapi.io';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (search, thunkApi) => {
    try {
        const events = await axios.get(`/events`);
      return events.data;
    } catch (error) {
    
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchEventDetails = createAsyncThunk(
  'events/fetchEventDetails',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get(`/events/${id}`);
      return data;
    } catch (error) {
      toastError()
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchEventDel = createAsyncThunk(
  'events/fetchEvent',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/events/${id}`);
      toastSuccessDelete();
      return data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchCategory = createAsyncThunk(
  'category/fetchCategory',
  async (categoryName, thunkApi) => {
    try {
      const { data } = await axios.get(`/events?${categoryName}`);
      console.log(data)
      return data;
    } catch (error) {
      toastError();
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
      toastSuccessAdd();
      return events.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);