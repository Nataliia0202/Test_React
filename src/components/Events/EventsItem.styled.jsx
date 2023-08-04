import styled from 'styled-components';


export const Image = styled.img`
  display: flex;
  max-width: 30%;
  border-radius: 10px;
  border: none;
`;

export const NameEvent = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-top: 20px;

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const DescriptionEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
  margin-top: 20px;

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;
export const PlaceEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
  margin-top: 20px;

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const TimeEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
  margin-top: 20px;

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const CategoryEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
  margin-top: 20px;

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const LevelEvent = styled.p`
  font-size: 12px;
  line-height: 26px;
  margin-top: 20px;

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
  @media screen and (min-width: 1024px) {
    width: 1170px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px 20px;
  @media screen and (min-width: 767px) {
    width: 271px;
  }

  @media screen and (max-width: 768px) {
    width: 332px;
  }

  @media screen and (min-width: 1024px) {
    width: 302px;
  }
`;