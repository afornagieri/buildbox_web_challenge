import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 95%;
  border-radius: 10px;
  height: 2em;
  border: none;
  margin: 0.5em;
  padding: 0.5em;
  font-weight: lighter;
  font-size: 1.4em;
  font-family: 'Roboto', sans-serif;
  text-align: start;
  color: #9f9f9f;
  background-color: #494949;
  outline: none;

  &::placeholder {
    padding-left: 0.1em;
    font-size: 0.8em;
    font-weight: 400;
    color: #9f9f9f;
  }

  &:focus {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    width: 70%;
    height: 1.5em;
    line-height: 1.5em;
  }

  @media (max-width: 425px) {
    width: 70%;
    height: 1em;
    font-size: 1.2em;
  }

  ${props => props.type === "file" && `
    width: 10%;
    height: 4em;
    border-radius: 48px;
    margin-top: 2em;
  
    @media (min-width: 2560px) {
      width: 10%;
    }

    @media (min-width: 1440px) and (max-width: 2559px) {
      width: 10%;
      height: 3em;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      width: 12%;
      height: 2.5em;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      width: 15%;
      height: 2em;
    }

    @media (min-width: 425px) and (max-width: 767px) {
      width: 20%;
      height: 2em;
    }

    @media (max-width: 425px) {
      width: 20%;
    }
  `}
`;

const StyledTextarea = styled.textarea`
  width: 95%;
  height: 6em;
  border-radius: 10px;
  border: none;
  margin: 0.5em;
  padding: 0.5em;
  font-weight: lighter;
  font-size: 1.4em;
  font-family: 'Roboto', sans-serif;
  text-align: start;
  color: #9f9f9f;
  background-color: #494949;
  resize: none;
  overflow: auto;
  outline: none;

  &::placeholder {
    text-align: start;
    padding-left: 0.1em;
    font-size: 0.8em;
    font-weight: 400;
    color: #9f9f9f;
  }

  &:focus {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    width: 70%;
    height: 4em;
  }

  @media (max-width: 425px) {
    width: 70%;
    height: 5em;
    font-size: 1.2em;
  }
`;

interface FormInputProps {
  type: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder }) => {
  if (type === "textarea") {
    return (
      <StyledTextarea
        placeholder={placeholder}
      />
    );
  }

  return (
    <StyledInput 
      type={type}
      placeholder={placeholder}
    />
  );
}
export default FormInput;
