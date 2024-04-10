

import { EventsItem } from "./EventsItem";
import { List, ListItem } from "./EventsItem.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents, selectSearch } from 'redux/selector';
import { fetchEvents } from "redux/operations";
import { useEffect } from "react";
import Pagination from "components/Pagination";
import { useState } from "react";


export const EventList = () => {
  const events = useSelector(selectEvents);
  console.log(events);
  const search = useSelector(selectSearch);
  const [currentPage, setCurrentPage] = useState(1);
 
  const dispatch = useDispatch();

  // const lenghtEv = events.length;
  // console.log(lenghtEv)
  // const totalPage = Math.ceil(lenghtEv/8)
  // console.log(totalPage)

  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
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
        pageCount={8}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
            />
    </>
  );
};