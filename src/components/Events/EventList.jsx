

import { EventsItem } from "./EventsItem";
import { List, ListItem } from "./EventsItem.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents, selectSearch, selectEventsWithOutLimit } from 'redux/selector';
import { fetchEvents, fetchEventsWithOutLimit } from "redux/operations";
import { useEffect } from "react";
import Pagination from "components/Pagination";
import { useState } from "react";


export const EventList = () => {
  const events = useSelector(selectEvents);
  const eventsAll = useSelector(selectEventsWithOutLimit)
  console.log(events);
  console.log(eventsAll)
  const search = useSelector(selectSearch);
  const [currentPage, setCurrentPage] = useState(1);
 
  const dispatch = useDispatch();

  const lenghtEv = eventsAll.length;
  const totalPage = Math.ceil(lenghtEv/8)

  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    dispatch(fetchEventsWithOutLimit());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchEvents({ search, currentPage}));
  }, [dispatch, search, currentPage]);
  

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
      <Pagination 
        pageCount={totalPage}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
            />
    </>
  );
};