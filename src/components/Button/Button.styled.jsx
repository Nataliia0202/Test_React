import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperButton = styled.div`
  display: flex;
  // margin-top: 40px;
  justify-content: flex-end;
  
  
`;

export const TextBtn = styled.span`
  display: none;
  
`
export const Icon = styled.svg``;



export const ButtonFilter = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  gap: 4px;
  border: none;
  box-shadow: 2px 4px 9px #a68dae;
  outline: none;
  margin-left: 20px;
  position: relative;
  background-color: #fff;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    ${Icon} {
      > path {
        stroke: #7b61ff;
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 143px;
    padding: 10px;
    font-family: 'Poppins';
    font-size: 16px;
    line-height: 24px;
    color: #3f3f3f;
    ${TextBtn} {
      display: block;
    }
    &:hover {
      color: #7b61ff;
     
    }
    @media screen and (min-width: 1280px) {
      width: 148px;
    }
  }

  &:hover {
    transform: scale(1.06);
    @media screen and (min-width: 768px) {
      margin-right: 0;
    }
  }
`;



export const ButtonSort = styled.button`
  width: 56px;
  height: 56px;
  gap: 4px;
  border-radius: 8px;
  border: none;
  box-shadow: 2px 4px 9px #a68dae;
  outline: none;
  margin-left: 20px;
  position: relative;
  background-color: #fff;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
    @media screen and (min-width: 768px) {
      margin-right: 0;
    }
  }
`;

export const ButtonAdd = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 56px;
  gap: 4px;
  border-radius: 8px;
  border: none;
  box-shadow: 2px 4px 9px #a68dae;
  outline: none;
  margin-left: 20px;
  background-color: #7b61ff;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
    @media screen and (min-width: 768px) {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 768px) {
    ${TextBtn} {
      display: block;
      justify-content: space-around;
      color: #fff;
      padding: 15px;
      width: 100%;
    }
  }
`;