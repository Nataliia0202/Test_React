


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents } from "../../redux/selector";
import { addNewEvents } from 'redux/operations';
import { NavButton } from 'components/GlobalStyles';
import { IconBack } from './IconBack';
import { IconButtonCloseTitel } from './AddForm.styled';
import { IconClose } from 'components/IconSearch';

import {
  TitelForf,
  Form,
  LabelInput,
  InputTitel,
  TextareaDescription,
  InputTitelDate,
  InputTitelTime,
  ButtonAdd,
  IconButtonCloseTitelWrapper,
  IconButtonCloseLocationWrapper,
  IconButtonCloseDescriptionWrapper,
  IconButtonCloseDescription,
} from './AddForm.styled';



export const AddForm = () => {

const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');

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
      level,
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
    setLevel('');
  };

  const backLinkHref = location.state?.from ?? '/';


  const onClickClear = () => {
    setName('');
   
  };

  const onClickClearLocation = () => {
    setLocation('');
  };
  
  const onClickCleardescription = () => {
    setDescription('');
  };

    return (
      <>
        
          <NavButton to={backLinkHref}>
            <IconBack styled={{ with: 24, height: 24 }} />
            Back
          </NavButton>

          <TitelForf>Create new event</TitelForf>
          <Form onSubmit={onSubmitForm}>
            <LabelInput>
              Title
              <IconButtonCloseTitelWrapper>
                <InputTitel
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces."
                  required
                  value={name}
                  onChange={event => setName(event.target.value)}
                />

                {name && (
                  <IconButtonCloseTitel type="button" onClick={onClickClear}>
                    <IconClose styled={{ with: 24, height: 24 }} />
                  </IconButtonCloseTitel>
                )}
              </IconButtonCloseTitelWrapper>
            </LabelInput>
            <LabelInput>
              Description
              <IconButtonCloseDescriptionWrapper>
                <TextareaDescription
                  type="text"
                  name="description"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />
                {description && (
                  <IconButtonCloseDescription
                    type="button"
                    onClick={onClickCleardescription}
                  >
                    <IconClose styled={{ with: 24, height: 24 }} />
                  </IconButtonCloseDescription>
                )}
              </IconButtonCloseDescriptionWrapper>
            </LabelInput>
            <LabelInput htmlFor="start">
              Select date
              <InputTitelDate
                type="date"
                name="date"
                required
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
                required
                min="09:00"
                max="23:00"
                value={time}
                onChange={event => setTime(event.target.value)}
              />
            </LabelInput>
            <LabelInput>
              Location
              <IconButtonCloseLocationWrapper>
                <InputTitel
                  type="text"
                  name="location"
                  required
                  value={location}
                  onChange={event => setLocation(event.target.value)}
                />
                {location && (
                  <IconButtonCloseTitel
                    type="button"
                    onClick={onClickClearLocation}
                  >
                    <IconClose styled={{ with: 24, height: 24 }} />
                  </IconButtonCloseTitel>
                )}
              </IconButtonCloseLocationWrapper>
            </LabelInput>
            <LabelInput>
              Category
              <InputTitel
                type="text"
                name="category"
                required
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
                name="level"
                required
                value={level}
                onChange={event => setLevel(event.target.value)}
              />
            </LabelInput>
            <ButtonAdd type="submit">Add event</ButtonAdd>
          </Form>
         
      </>
    );
}