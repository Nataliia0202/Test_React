import styled from 'styled-components';
import '@fontsource/alata';



export const Header = styled.header`
  display: flex;
  background-color: #fefcff;
  padding: 16px 16px;
  
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #7b61ff;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    
    
  }
`;
 
export const Logo = styled.p`
  font-weight: 400;
  margin: 0;
  color: #7b61ff;
  font-size: 24px;
  font-family: Alata;
  line-height: 33.12px;
  margin-right: 50px;
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

export const Select = styled.select`
  width: 69px;
  height: 48px;
  border-radius: 8px;
  padding: 12px, 4px, 12px, 12px;
  gap: 4px;
  border: none;
  box-shadow: 2px 4px 9px #a68dae;
  outline: none;
  margin-left: 20px;
`;
export const Options = styled.option`
  
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  overflow: hidden;
  width: 272px;
  height: 48px;
  border-radius: 10px;
  box-shadow: 2px 4px 9px #a68dae;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 368px;
    margin-top: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;

export const SearchInput = styled.input`

  width: 100%;
  height: 100%;
  border: none;
  padding: 12px;
  &:hover {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const IconButton = styled.div`
  display: inline-block;
 margin-left: 10px;
margin-top:5px;
  
  background-color: transparent;
  border: none;
 
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const IconButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 15px;
  top: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
