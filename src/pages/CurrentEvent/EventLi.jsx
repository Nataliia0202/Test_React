import {
  ImgEvOne,
  NameEventOne,
  DescriptionEventOne,
  PlaceEventOne,
  TimeEventOne,
  CategoryEventOne,
  LevelEventOne,
  
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
       
          <TimeEventOne>{time}</TimeEventOne>
          <PlaceEventOne>{place}</PlaceEventOne>
        
        
          <CategoryEventOne>{category}</CategoryEventOne>
          <LevelEventOne>{level}</LevelEventOne>
       
      </WrapperContent>
    </>
  );
};
