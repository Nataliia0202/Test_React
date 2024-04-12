

import { EventsItem } from "./EventsItem";
import { List, ListItem } from "./EventsItem.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents, selectSearch, selectEventsWithOutLimit } from 'redux/selector';
import { fetchEvents, fetchEventsWithOutLimit} from "redux/operations";
import { useEffect } from "react";
import Pagination from "components/Pagination";
import { useState } from "react";
import { SimpleMenu } from "components/Button/BtnFilter";
import { IconAdd} from "components/IconSearch";

import { BtnSort } from "../Button/BtnSort";
import { WrapperButton, ButtonAdd, TextBtn } from '../Button/Button.styled';

export const EventList = () => {
  const events = useSelector(selectEvents);
  const eventsAll = useSelector(selectEventsWithOutLimit)
  
  const categoryName = useSelector((state) => state.filters.categoryName);
  const search = useSelector(selectSearch);
  const [currentPage, setCurrentPage] = useState(1);
 
  const dispatch = useDispatch();

  const lenghtEv = eventsAll.length;
  const totalPage = Math.ceil(lenghtEv/8);


  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    dispatch(fetchEventsWithOutLimit());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchEvents({ search, currentPage, categoryName}));
  }, [dispatch, search, currentPage, categoryName]);
  

  return (
    <>
    <WrapperButton>
          <SimpleMenu text="Category" />
          <BtnSort text="Sort by" />
          <ButtonAdd to="add">
            <IconAdd />
            <TextBtn>Add new event</TextBtn>
          </ButtonAdd>
    </WrapperButton>
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
      {totalPage > 1 && 
      <Pagination 
        pageCount={totalPage}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
            />}
      
    </>
  );
};