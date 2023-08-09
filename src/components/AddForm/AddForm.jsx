
import {
  TitelForf,
  Form,
  LabelInput,
  InputTitel,
  TextareaDescription,
  InputTitelDate,
  InputTitelTime,
  ButtonAdd,
 
} from './AddForm.styled';
import { Container } from 'components/GlobalStyles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents } from "../../redux/selector";
import { addNewEvents } from 'redux/operations';

import { NavButton } from 'components/GlobalStyles';
import { IconBack } from './IconBack';

export const AddForm = () => {

const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

const events = useSelector(selectEvents);
  const dispatch = useDispatch();
  

  const onSubmitForm = event => {
    event.preventDefault();
    const checkEvents = events.some(
      eventP => eventP.name.toLowerCase() === name.toLowerCase()
    );
    if (checkEvents === true) {
      reset();
     
    }
    const newEventt = {
      name,
      description,
      date,
      time,
      location,
      category,
      priority,
    };
    dispatch(addNewEvents(newEventt));
    reset();
  };
  const reset = () => {
    setName('');
    setDescription('');
    setDate('');
    setTime('');
    setLocation('');
    setCategory('');
    setPriority('');
  };

  const backLinkHref = location.state?.from ?? '/';
  

    return (
      <>
        <Container>
          <NavButton to={backLinkHref}>
            <IconBack styled={{ with: 24, height: 24 }} />
            Back
          </NavButton>

          <TitelForf>Create new event</TitelForf>
          <Form onSubmit={onSubmitForm}>
            <LabelInput>
              Title
              <InputTitel
                type="text"
                name="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </LabelInput>
            <LabelInput>
              Description
              <TextareaDescription
                type="text"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </LabelInput>
            <LabelInput htmlFor="start">
              Select date
              <InputTitelDate
                type="date"
                name="date"
                value={date}
                onChange={event => setDate(event.target.value)}
              />
            </LabelInput>
            <LabelInput htmlFor="time">
              Select time
              <InputTitelTime
                type="time"
                id="appt"
                name="time"
                min="09:00"
                max="18:00"
                value={time}
                onChange={event => setTime(event.target.value)}
              />
            </LabelInput>
            <LabelInput>
              Location
              <InputTitel
                type="text"
                name="location"
                value={location}
                onChange={event => setLocation(event.target.value)}
              />
            </LabelInput>
            <LabelInput>
              Category
              <InputTitel
                type="text"
                name="category"
                value={category}
                onChange={event => setCategory(event.target.value)}
              />
            </LabelInput>
            <LabelInput style={{ color: '#ACA7C3' }}>
              Add picture
              <InputTitel disabled style={{ color: '#ACA7C3' }} />
            </LabelInput>
            <LabelInput>
              Priority
              <InputTitel
                type="text"
                name="priority"
                value={priority}
                onChange={event => setPriority(event.target.value)}
              />
            </LabelInput>
            <ButtonAdd type="submit">Add event</ButtonAdd>
          </Form>
        </Container>
      </>
    );
}