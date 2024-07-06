import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Content from "./components/Content";

import Form from "./components/Form";
import FormInput from "./components/Form/FormInput";
import FormContent from "./components/Form/FormContent";
import GroupFormButton from "./components/Form/GroupFormButton";
import FormButton from "./components/Form/FormButton";

import Post from "./components/Form/Post";

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

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
  z-index: 1;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 20px;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7%;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState<{ id: number; name: string; message: string; image: string | null }[]>([]);
  const [postIdCounter, setPostIdCounter] = useState(1);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
      setPostIdCounter(JSON.parse(storedPosts).length + 1);
    }
  }, []);

  const savePostsToLocalStorage = (updatedPosts: any[]) => {
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handlePublish = () => {
    if (name || message) {
      const newPost = {
        id: postIdCounter,
        name: name,
        message: message,
        image: localStorage.getItem("selectedImage") || null,
      };
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      savePostsToLocalStorage(updatedPosts);
      setPostIdCounter(prevId => prevId + 1);
      localStorage.removeItem("selectedImage");
      setName("");
      setMessage("");
    }
  };

  const handleDismiss = (postId: number) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
  };

  const handleInputChange = (value: string, type: string) => {
    if (type === "name") {
      setName(value);
    } else if (type === "message") {
      setMessage(value);
    }
  };

  return (
    <>
      <Header>
        <div>
          <Title>buildbox</Title>
          <SubTitle>WEB CHALLENGE</SubTitle>
        </div>
      </Header>
      <Content>
        <AppContainer>
          <FormContainer>
            <Form>
              <FormContent>
                <FormInput type="file" placeholder="" />
                <FormInput type="text" placeholder="Digite seu nome" onChange={(value) => handleInputChange(value, "name")} />
                <FormInput type="textarea" placeholder="Mensagem" onChange={(value) => handleInputChange(value, "message")} />
                <GroupFormButton>
                  <FormButton type="reset" text="Descartar" onClick={() => {}} />
                  <FormButton type="submit" text="Publicar" onClick={handlePublish} />
                </GroupFormButton>
              </FormContent>
            </Form>
          </FormContainer>
          <FeedContainer>
            {posts.map((post: any, index) => (
              <Post id={post.id} key={`item-${post.id}`} name={post.name} message={post.message} image={post.image} onDismiss={() => handleDismiss(post.id)} />
            ))}
          </FeedContainer>
        </AppContainer>
      </Content>
    </>
  );
}

export default App;
