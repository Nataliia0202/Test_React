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
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const LabelInput = styled.label`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  color: #7b61ff;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

export const InputTitel = styled.input`
  width: 240px;
  height: 24px;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 12px 16px;
  outline: none;
  box-sizing: border-box;
`;

export const TextareaDescription = styled.textarea`
  width: 240px;
  height: 156px;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 12px 16px;
  outline: none;
  box-sizing: border-box;
`;