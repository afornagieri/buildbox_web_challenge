import styled from "styled-components";

const commonButtonStyles = `
  width: 20%;
  height: 3em;
  border: none;
  border-radius: 10px;
  margin: 0.5em;
  padding: 0.5em;
  font-weight: 400;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #393939;
  outline: none;
  cursor: pointer;

  @media (min-width: 2560px) {
    width: 15%;
    font-size: 1.2em;
  }

  @media (min-width: 1440px) and (max-width: 2559px) {
    width: 17%;
    font-size: 1.1em;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 20%;
    font-size: 1em;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 25%;
    font-size: 0.9em;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    width: 30%;
    font-size: 0.8em;
  }

  @media (max-width: 425px) {
    width: 40%;
    font-size: 0.7em;
  }
`;

const submitButtonStyles = `
  background-color: #5f5f5f;

  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
    color: #252525;
  }

  &:focus {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  }
`;

const resetButtonStyles = `
  background-color: #313131;
  color: #4e4e4e;
  text-decoration: underline;

  &:hover {
    color: #252525;
  }
`;

const StyledButton = styled.button`
  ${commonButtonStyles}

  ${props => props.type === "submit" && submitButtonStyles}
  ${props => props.type === "reset" && resetButtonStyles}
`;

interface FormButtonProps {
  type: "submit" | "reset" | undefined;
  text: string;
}

const FormButton: React.FC<FormButtonProps> = ({ type, text }) => {
  return (
        <StyledButton type={type}>
          {text}
        </StyledButton>
  );
}

export default FormButton;