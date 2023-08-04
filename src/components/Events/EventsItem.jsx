import {
  Image,
  NameEvent,
  DescriptionEvent,
  PlaceEvent,
  TimeEvent,
  CategoryEvent,
  LevelEvent,
  
 
} from './EventsItem.styled';

export const EventsItem = ({ name, image, place, time, description, category, level}) => {
    return (
      <>
        
          <Image src={image} alt="Events" />
        

        <NameEvent>{name}</NameEvent>
        <DescriptionEvent>{description}</DescriptionEvent>
        <PlaceEvent>{place}</PlaceEvent>
        <TimeEvent>{time}</TimeEvent>
        <CategoryEvent>{category}</CategoryEvent>
        <LevelEvent>{level}</LevelEvent>
        
      </>
    );
}