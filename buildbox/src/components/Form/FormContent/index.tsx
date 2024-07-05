import styled from "styled-components";

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;

  @media (min-width: 325px) and (max-width: 475px) {
    width: 100%;
  }
`;

export default FormContent