import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperButton = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: flex-end;
  margin-right: 30px;
  
`;

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
    transform: scale(1.06);
    @media screen and (min-width: 768px) {
      margin-right: 0;
    }
  }
`;
export const MenuUl = styled.ul`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
`;
export const MenuLi = styled.li`
  gap: 30px;
position: relative;
`

export const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #fff;
  width: 170px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
 &.is-active {
  opacity: 1;
  visibility: visible;
 }

`;
export const DropdownContentUl = styled.ul`

`;



export const DropdownContentLi = styled.li`
  

`


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
align-items:center;
justify-content: center;
  width: 56px;
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
`;