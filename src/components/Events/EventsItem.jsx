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
import { Link, useLocation } from 'react-router-dom';



export const EventsItem = ({ name, image, place, time, description, category, level, id }) => {
  const location = useLocation();
    return (
      <>
        <Image src={image} alt="Events" />

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
        <Link to={`events/${id}`} state={{ from: location }}>
          <ButtonMoreInfo>More info</ButtonMoreInfo>
        </Link>
      </>
    );
}