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
} from './EventsItem.styled';

export const EventsItem = ({ name, image, place, time, description, category, level}) => {
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
      </>
    );
}