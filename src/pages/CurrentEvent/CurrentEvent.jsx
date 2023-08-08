import {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import { fetchEventDetails } from 'redux/operations';

import {
  WrapperEventOne,
  ImgEvOne,
  NameEventOne,
  DescriptionEventOne,
  PlaceEventOne,
  TimeEventOne,
  CategoryEventOne,
  LevelEventOne,
} from './CurrentEvent.styled';

import { Container } from 'components/GlobalStyles';
import { NavButton } from 'components/GlobalStyles';
import { IconBack } from 'components/AddForm/IconBack';
import { useLocation } from 'react-router-dom';

export const CurrentEvent = () => {
  const [infoEv, setInfoEv] = useState('');
   const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { id } = useParams();
   
   

    useEffect(() => {
      const getInfoEvent = async () => {
        try {
          const respons = await fetchEventDetails(id);
          setInfoEv(respons);
          console.log(respons);
        } catch (error) { }
      };
      getInfoEvent()
    }, [id]);
  
  if (infoEv === '') {
    return;
  }
  const { name, image, place, time, description, category, level } = infoEv;
    
  
  
    return (
      <>
        <Container>
          <NavButton to={backLinkHref}>
            <IconBack styled={{ with: 24, height: 24 }} />
            Back
          </NavButton>
          <WrapperEventOne>
            <ImgEvOne src={image} alt="Events" />
            <NameEventOne>{name}</NameEventOne>
            <DescriptionEventOne>{description}</DescriptionEventOne>
            <PlaceEventOne>{place}</PlaceEventOne>
            <TimeEventOne>{time}</TimeEventOne>
            <CategoryEventOne>{category}</CategoryEventOne>
            <LevelEventOne>{level}</LevelEventOne>
          </WrapperEventOne>
        </Container>
      </>
    );
};
