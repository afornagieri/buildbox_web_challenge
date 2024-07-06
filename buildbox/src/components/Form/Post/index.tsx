import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #313131;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  width: 80%;
  background-color: #313131;
  word-break: break-all;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 16px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostMessage = styled.div`
  font-size: 1.5em;
  color: #8b8b8b;
  margin: 8px 0;
`;

const PostFooter = styled.div`
  font-size: 0.85em;
  color: #5f5f5f;
  margin-top: 8px;
`;

const Sender = styled.div`
  font-size: 0.85em;
  color: #b3b3b3;
  font-weight: bold;
`;

const DismissButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  color: red;
  margin-bottom: 1.2em;
`;

interface PostProps {
  id: number;
  name: string;
  message: string;
  image: string | null;
  onDismiss: (id: number) => void;
}

const Post: React.FC<PostProps> = ({ id, name, message, image, onDismiss }) => {
  return (
    <PostContainer>
      <DismissButton onClick={() => onDismiss(id)}><span className="material-symbols-outlined">cancel</span></DismissButton>
      <PostHeader>
        {image && <Avatar src={image} alt={`${name}'s avatar`} />}
        <PostContent>
          <PostMessage>{message}</PostMessage>
          <Sender>Enviado por:</Sender>
          <PostFooter>{name}</PostFooter>
        </PostContent>
      </PostHeader>
    </PostContainer>
  );
};

export default Post;
