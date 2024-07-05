import styled from "styled-components";

import Header from "./components/Header";
import Content from "./components/Content";

import Form from "./components/Form";
import FormInput from "./components/Form/FormInput";
import FormContent from "./components/Form/FormContent";
import GroupFormButton from "./components/Form/GroupFormButton";
import FormButton from "./components/Form/FormButton";

const Title = styled.h1`
  font-size: 2em;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  line-height: 0.3em;
  color: #74b80e;
  margin-bottom: 0.4em;
`;

const SubTitle = styled.h2`
  font-size: 1em;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #575757;
`;

function App() {
  return (
    <div>
      <Header>
        <div>
          <Title>
            buildbox
          </Title>
          <SubTitle>
            WEB CHALLENGE
          </SubTitle>
        </div>
      </Header>
      <Content>
        <Form>
          <FormContent>
            <FormInput type="file" placeholder="" />
            <FormInput type="text" placeholder="Digite seu nome" />
            <FormInput type="textarea" placeholder="Mensagem" />
            <GroupFormButton>
              <FormButton type="reset" text="Descartar" />
              <FormButton type="submit" text="Publicar" />
            </GroupFormButton>
          </FormContent>
        </Form>
      </Content>
    </div>
  );
}

export default App;
