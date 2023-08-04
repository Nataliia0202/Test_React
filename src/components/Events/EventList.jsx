

import { EventsItem } from "./EventsItem";
import { List, ListItem } from "./EventsItem.styled";
import { useSelector } from 'react-redux';
import { selectEvents } from "redux/selector";

export const EventList = () => {

    const events = useSelector(selectEvents);

    return (
      <>
        <List>
          {events.map(
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
}