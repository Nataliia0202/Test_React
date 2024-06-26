import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvents, fetchEventDel } from 'redux/operations';
import { TitelForf } from 'components/AddForm/AddForm.styled';
import {
  WrapperEventOne,
  ButtonEventOne,
  WrapperButtonOne,
  WrapperPage,
} from './CurrentEvent.styled';

import { Container } from 'components/GlobalStyles';
import { NavButton } from 'components/GlobalStyles';
import { IconBack } from 'components/AddForm/IconBack';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents } from 'redux/selector';
import { Link } from 'react-router-dom';
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
          <WrapperPage>
          <NavButton to={backLinkHref}>
            <IconBack styled={{ with: 24, height: 24 }} />
            Back
          </NavButton>

          {events &&
            events?.map(
              event =>
                event.id === id && (
                  <>
                    <TitelForf>{event.name}</TitelForf>
                    <WrapperEventOne>
                      <EventLi
                        key={event.id}
                        
                        image={event.image}
                        place={event.place}
                        time={event.time}
                        description={event.description}
                        category={event.category}
                        level={event.level}
                      />
                      <WrapperButtonOne>
                        <ButtonEventOne>Edit</ButtonEventOne>
                        <Link to="/">
                          <ButtonEventOne
                            type="button"
                            onClick={() => dispatch(fetchEventDel(event.id))}
                          >
                            Delete
                          </ButtonEventOne>
                        </Link>
                      </WrapperButtonOne>
                    </WrapperEventOne>
                  </>
                )
            )}
            </WrapperPage>
        </Container>
      </>
    );
};
