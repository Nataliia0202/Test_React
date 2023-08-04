import styled from 'styled-components';
import '@fontsource/alata';



export const Header = styled.header`
  display: flex;
  background-color: #fefcff;
  padding: 16px 16px;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #7b61ff;
  @media screen and (min-width: 768px) {
    display: block;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    width: 100vw;
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
  @media screen and (min-width: 320px) {
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
`;
export const Options = styled.option`
  
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  overflow: hidden;
  width: 272px;
  height: 48px;
  border-radius: 10px;
  box-shadow: 2px 4px 9px #a68dae;
  margin-top: 40px;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    width: 368px;
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
`;

export const IconButton = styled.button`
  display: inline-block;
 margin-left: 10px;
margin-top:5px;
  
  background-color: transparent;
  border: none;
 
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;