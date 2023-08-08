import {useEffect} from 'react';
import {useParams } from 'react-router-dom';
import {  fetchEventDetails } from 'redux/operations';
import { useSelector} from 'react-redux';
import { selectEvents } from 'redux/selector';
import {
  WrapperEventOne,
  ImgEvOne,
  NameEventOne,
  DescriptionEventOne,
  PlaceEventOne,
  TimeEventOne,
  CategoryEventOne,
} from './CurrentEvent.styled';
import { useDispatch } from 'react-redux';



export const CurrentEvent = () => {
    // const events = useSelector(selectEvents);
   
  const events = useSelector(selectEvents);
  const { id } = useParams();
    console.log(events);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchEventDetails(id));
    }, [dispatch, id]);
    
    return (
      <>
        <WrapperEventOne>
          <ImgEvOne src={events.image} alt="Events" />
          <NameEventOne>{events.name}</NameEventOne>
          <DescriptionEventOne>{events.description}</DescriptionEventOne>
          <PlaceEventOne>{events.place}</PlaceEventOne>
          <TimeEventOne>{events.time}</TimeEventOne>
          <CategoryEventOne>{events.category}</CategoryEventOne>
        </WrapperEventOne>
      </>
    );
};
