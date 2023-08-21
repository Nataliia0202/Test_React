import styled from 'styled-components';


export const TitelForf = styled.h1`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  color: #3f3f3f;
  line-height: 36px;
  margin-top: 20px;
 margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 272px;
  height: 100%;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px #a68dae;
  background-color: #fff;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 688px;
    display: grid;
    justify-items: center;
    place-items: center;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    align-items: stretch;
    grid-gap: 16px;
    grid-column-gap: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    display: grid;
    justify-items: center;
    place-items: center;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-template-rows: 200px auto 100px;
    grid-gap: 16px;
    grid-column-gap: 20px;
    align-items: start;
  }
`;

export const LabelInput = styled.label`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  color: #7b61ff;
  line-height: 16px;
  letter-spacing: 0.4px;
  margin-top: 15px;
`;

export const InputTitel = styled.input`
  font-family: 'Poppins';
  width: 240px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 12px 16px;
  outline: none;
  box-sizing: border-box;
  margin-top: 5px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 308px;
  }
  @media screen and (min-width: 1280px) {
    width: 372px;
  }
`;

export const TextareaDescription = styled.textarea`
  font-family: 'Poppins';
  width: 240px;
  height: 156px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 15px 25px;
  outline: none;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    width: 308px;
  }
  @media screen and (min-width: 1280px) {
    width: 372px;
  }
`;

export const InputTitelDate = styled.input`
  font-family: 'Poppins';
  width: 240px;
  height: 56px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 12px 16px;
  outline: none;
  box-sizing: border-box;
  color: #3f3f3f;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    width: 308px;
  }
  @media screen and (min-width: 1280px) {
    width: 372px;
  }
`;

export const InputTitelTime = styled.input`
  font-family: 'Poppins';
  width: 240px;
  height: 56px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 12px 16px;
  outline: none;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    width: 308px;
  }
  @media screen and (min-width: 1280px) {
    width: 372px;
  }
`;

export const ButtonAdd = styled.button`
  width: 240px;
  height: 56px;
  margin-top: 40px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  line-height: 16px;
  background-color: #7b61ff;
  padding: 12px 16px;
  gap: 16px;
  border-radius: 8px;
  border: none;
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
    width: 193px;
  }
`;


export const IconButtonCloseTitel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 15px;
  top: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconButtonCloseTitelWrapper = styled.div`
  display: inline-block;
  position: relative;

`

export const IconButtonCloseLocationWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const IconButtonCloseDescriptionWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const IconButtonCloseDescription = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

