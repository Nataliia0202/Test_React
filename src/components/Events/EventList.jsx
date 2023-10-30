

import { EventsItem } from "./EventsItem";
import { List, ListItem } from "./EventsItem.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents, selectSearch } from 'redux/selector';
import { fetchEvents } from "redux/operations";
import { useEffect } from "react";



export const EventList = () => {
  const events = useSelector(selectEvents);
  console.log(events);
  const search = useSelector(selectSearch);
 
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchEvents({ search}));
  }, [dispatch, search]);
  

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