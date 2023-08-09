import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {fetchEvents } from 'redux/operations';
import { TitelForf } from 'components/AddForm/AddForm.styled';
import { WrapperEventOne} from './CurrentEvent.styled';

import { Container } from 'components/GlobalStyles';
import { NavButton } from 'components/GlobalStyles';
import { IconBack } from 'components/AddForm/IconBack';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents } from 'redux/selector';

import { EventLi } from './EventLi';

export const CurrentEvent = () => {
 
  const dispatch = useDispatch()
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const {id} = useParams()
 
const events = useSelector(selectEvents);



  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  
    
  
  
    return (
      <>
        <Container>
          <NavButton to={backLinkHref}>
            <IconBack styled={{ with: 24, height: 24 }} />
            Back
          </NavButton>

          <TitelForf>Galery Opening</TitelForf>

          {events &&
            events?.map(
              event =>
                event.id === id && (
                  <WrapperEventOne>
                    <EventLi
                      key={event.id}
                      name={event.name}
                      image={event.image}
                      place={event.place}
                      time={event.time}
                      description={event.description}
                      category={event.category}
                      level={event.level}
                    />
                  </WrapperEventOne>
                )
            )}
          
        </Container>
      </>
    );
};
