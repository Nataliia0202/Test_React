

import { EventsItem } from "./EventsItem";
import { List, ListItem } from "./EventsItem.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents } from 'redux/selector';
import { fetchEvents } from "redux/operations";

import { useEffect } from "react";





export const EventList = () => {
  const events = useSelector(selectEvents);
  console.log(events);
  const dispatch = useDispatch();
  // const filteredEvents = useSelector(selectFilteredEvents);
  // console.log(filteredEvents);

useEffect(() => {
  dispatch(fetchEvents());
}, [dispatch]);
  
  

  return (
    <>
      <List>
        {events.length !== 0 &&
          events.map(
            ({
              id,
              name,
              image,
              place,
              time,
              description,
              category,
              level,
            }) => {
              return (
                <ListItem key={id}>
                  <EventsItem
                    id={id}
                    name={name}
                    image={image}
                    place={place}
                    time={time}
                    description={description}
                    category={category}
                    level={level}
                  />
                </ListItem>
              );
            }
          )}
      </List>
    </>
  );
};