import {
  
  ImgEvOne,
  NameEventOne,
  DescriptionEventOne,
  PlaceEventOne,
  TimeEventOne,
  CategoryEventOne,
  LevelEventOne,
  WrapperTimeOne,
  WrapperCategoryOne,
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
        <NameEventOne>{name}</NameEventOne>
        <DescriptionEventOne>{description}</DescriptionEventOne>
        <WrapperTimeOne>
          <TimeEventOne>{time}</TimeEventOne>
          <PlaceEventOne>{place}</PlaceEventOne>
        </WrapperTimeOne>
        <WrapperCategoryOne>
          <CategoryEventOne>{category}</CategoryEventOne>
          <LevelEventOne>{level}</LevelEventOne>
        </WrapperCategoryOne>
      
    </>
  );
};
