import {  useLocation } from 'react-router-dom';

import {
  Image,
  NameEvent,
  DescriptionEvent,
  PlaceEvent,
  TimeEvent,
  CategoryEvent,
  LevelEvent,
  WrapperTime,
  WrapperCategory,
  ButtonMoreInfo,
} from './EventsItem.styled';

export const EventsItem = ({
  name,
  image,
  place,
  time,
  description,
  category,
  level,
  id,
}) => {
  
  const location = useLocation();
  return (
    <>
      <Image src={image} alt="Events" loading="lazy" />

      <NameEvent>{name}</NameEvent>
      <DescriptionEvent>{description}</DescriptionEvent>
      <WrapperTime>
        <TimeEvent>{time}</TimeEvent>
        <PlaceEvent>{place}</PlaceEvent>
      </WrapperTime>
      <WrapperCategory>
        <CategoryEvent>{category}</CategoryEvent>
        <LevelEvent>{level}</LevelEvent>
      </WrapperCategory>
      
        <ButtonMoreInfo to={`events/${id}`} state={{ from: location }}>
          More info
        </ButtonMoreInfo>
      
    </>
  );
};
