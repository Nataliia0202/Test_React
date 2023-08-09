import styled from 'styled-components';

export const WrapperEventOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px 20px;
  padding-top: 0px;
  border-radius: 10px;
  height: 480px;
  width: 272px;
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
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
export const WrapperTimeOne = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 144px;
  left: 0;
  margin: 0;
  font-weight: 600;
  line-height: 1.14;
  text-align: center;
 
  color: #fff;
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const WrapperCategoryOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 15px;
`;

export const ImgEvOne = styled.img`
  display: block;
  position: relative;
  width: 272px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: none;
  object-fit: cover;
  height: 168px;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 15px;
  color: #49454f;
`;
export const PlaceEventOne = styled.p`
  font-size: 12px;
  line-height: 26px;
  font-family: 'Poppins';
  text-align: center;
  color: #49454f;
`;
  

  export const TimeEventOne = styled.p`
  font-size: 12px;
  line-height: 26px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const CategoryEventOne = styled.p`
  font-size: 14px;
  line-height: 20px;
  display: block;
  margin-right:10px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-weight: 600;
font-family:'Poppins';
  text-align: center;
  color: #7b61ff;
`;

export const LevelEventOne = styled.p`
  font-size: 14px;
  line-height: 20px;
  display: block;

  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-weight: 600;
  font-family: 'Poppins';

  text-align: center;
  color: #ff2b77;
`;

export const ButtonEventOne = styled.button`
  width: 100px;
  height: 32px;
  border-radius: 8px;
  padding: 10px 24px;
  margin-top: 5px;
line-height: 16px;
  gap: 10px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  border: none;
  background-color: #7b61ff;
  color: #fff;
  cursor: pointer;
`;

export const WrapperButtonOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  gap: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 5px;
  }
`;