import styled from 'styled-components';

export const WrapperEventOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  padding-top: 0px;
  border-radius: 10px;
  box-shadow: 2px 4px 9px #a68dae;
  height: 100%;
  width: 272px;
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  display: inline-block;
  vertical-align: top;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
  @media screen and (min-width: 768px) {
    width: 302px;
    margin: 0;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 302px;
    margin: 0;
    margin-top: 40px;
  }
`;

export const WrapperContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;





export const ImgEvOne = styled.img`
  display: block;
  /* position: absolute; */
  width: 100%;
  top:0;
  left:0;
  border-radius: 10px;
  
  border: none;
  object-fit: cover;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 302px;
    height: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 302px;
  }
`;

export const NameEventOne = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-top: 15px;
  color: #1c1b1f;
  font-weight: 600;
  font-family: 'Poppins';
`;

export const DescriptionEventOne = styled.p`
  font-size: 14px;
  line-height: 20px;

  margin-top: 15px;
  color: #49454f;
  @media screen and (min-width: 768px) {
    
    
  }
`;

export const WrapperDiv = styled.div`
  display: flex;
  gap: 10px;
margin-top: 15px;
`

export const PlaceEventOne = styled.p`
  display: inline-block;
  font-size: 12px;
  line-height: 26px;
  font-family: 'Poppins';
  text-align: center;
  color: #7b61ff;
  font-family:500;
  border-radius: 8px;
  box-shadow: 2px 4px 9px #a68dae;
  background-color: #fff;
  padding: 5px;
`;
  

export const TimeEventOne = styled.p`
  display: inline-block;
  font-size: 12px;
  font-family: 'Poppins';
  font-family: 500;
  line-height: 26px;
  text-align: center;
  color: #7b61ff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px #a68dae;
  background-color: #fff;
  padding: 5px;
  margin-top: 15px;
`;

export const CategoryEventOne = styled.p`
  font-size: 14px;
  display: inline-block;
  
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-weight: 500;
  font-family: 'Poppins';
  text-align: center;
  color: #7b61ff;
  
  box-shadow: 2px 4px 9px #a68dae;
`;

export const LevelEventOne = styled.p`
  font-size: 14px;

  display: inline-block;
  border-radius: 8px;
  box-shadow: 2px 4px 9px #a68dae;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-weight: 500;
  font-family: 'Poppins';

  text-align: center;
  color: #ff2b77;
`;

export const ButtonEventOne = styled.button`
  width: 100px;
  height: 32px;
  border-radius: 8px;
  padding: 8px 16px;
  margin-top: 5px;
  line-height: 16px;
  gap: 10px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  border: 1px solid #7b61ff;
  background-color: #fff;
  color: #7b61ff;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #7b61ff;
    color: #fff;
    transform: scale(1.06);
    /* @media screen and (min-width: 768px) {
      margin-right: 0;
    } */
  }
`;

export const WrapperButtonOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom:20px;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`;