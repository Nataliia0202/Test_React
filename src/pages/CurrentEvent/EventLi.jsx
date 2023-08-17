import {
  ImgEvOne,
  NameEventOne,
  DescriptionEventOne,
  PlaceEventOne,
  TimeEventOne,
  CategoryEventOne,
  LevelEventOne,
  WrapperDiv,
  WrapperContent,
} from './CurrentEvent.styled';


export const EventLi = ({
  name,
  image,
  place,
  time,
  description,
  category,
  level,
  id,
}) => {
  
  
  return (
    <>
      <ImgEvOne src={image} alt="Events" />
      <WrapperContent>
        <NameEventOne>{name}</NameEventOne>
        <DescriptionEventOne>{description}</DescriptionEventOne>
        <WrapperDiv>
          <CategoryEventOne>{category}</CategoryEventOne>
          <LevelEventOne>{level}</LevelEventOne>
          <PlaceEventOne>{place}</PlaceEventOne>
        </WrapperDiv>
        <TimeEventOne>{time}</TimeEventOne>
      </WrapperContent>
    </>
  );
};
