import styled from 'styled-components';


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

export const ButtonAdd = styled.button`
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