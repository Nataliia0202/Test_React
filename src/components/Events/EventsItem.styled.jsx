import styled from 'styled-components';


export const Image = styled.img`
  display: block;
  position: relative;
  max-width: 332px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: none;
  object-fit:cover;
  height: 336px;
 
  @media screen and (min-width: 1280px) {
    width: 302px;
  }
`;

export const NameEvent = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-top: 15px;
  color: #1c1b1f;
  font-weight: 600;
  font-family:'Poppins'
`;

export const DescriptionEvent = styled.p`
  font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  color: #49454f;
`;
export const PlaceEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
  

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;
export const WrapperTime = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 150px;
  left: 0;
  margin: 0;
  font-weight: 700;
  line-height: 1.14;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
`;
export const TimeEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const CategoryEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
 

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const LevelEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
  

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;


export const List = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  grid-column-gap: 0px;

  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px 20px;
  padding-top: 0px;
  border-radius: 10px;
  height: 480px;
  width: 332px;
  position: relative;

  @media screen and (min-width: 1280px) {
    width: 302px;
  }
`;